import {
    COMBINED_EMPLOYMENT_CAP,
    NOMINATION_POINTS,
} from './snapshot';

export const CATEGORY = {
    AGE: 'Age',
    ENGLISH: 'English Language',
    OVERSEAS_WORK: 'Overseas Work Experience',
    AUSTRALIAN_WORK: 'Australian Work Experience',
    EDUCATION: 'Educational Qualifications',
    AUSTRALIAN_STUDY: 'Australian Study Requirement',
    SPECIALIST: 'Specialist Educational Qualification',
    COMMUNITY_LANGUAGE: 'Accredited Community Language',
    PARTNER: 'Partner Qualifications',
    PROFESSIONAL_YEAR: 'Professional Year in Australia',
    REGIONAL_STUDY: 'Regional Study',
};

const CATEGORY_ALIASES = {
    'Australian Educational Qualification': CATEGORY.AUSTRALIAN_STUDY,
};

const IGNORED_CATEGORIES = new Set(['Visa Subclass']);

const PERSONAL_CATEGORIES = [
    CATEGORY.AGE,
    CATEGORY.ENGLISH,
    CATEGORY.EDUCATION,
    CATEGORY.AUSTRALIAN_STUDY,
    CATEGORY.SPECIALIST,
    CATEGORY.COMMUNITY_LANGUAGE,
    CATEGORY.PARTNER,
    CATEGORY.PROFESSIONAL_YEAR,
];

function canonicalCategory(name) {
    return CATEGORY_ALIASES[name] || name;
}

function claimedPoints(selectedOptions, category) {
    const direct = selectedOptions[category];
    if (direct && typeof direct.points === 'number') {
        return direct.points;
    }
    const aliasKey = Object.keys(CATEGORY_ALIASES).find(
        (key) => CATEGORY_ALIASES[key] === category && selectedOptions[key]
    );
    if (aliasKey && typeof selectedOptions[aliasKey].points === 'number') {
        return selectedOptions[aliasKey].points;
    }
    return 0;
}

function formatEmploymentWarning(claimed, awarded) {
    return `Employment capped at ${awarded} Awarded Points (${claimed} claimed). Combined Overseas and Australian skilled employment cannot exceed ${COMBINED_EMPLOYMENT_CAP}.`;
}

function formatRegionalStudyWarning() {
    return 'Regional Study awarded 0 — Australian Study Requirement not met.';
}

export function scorePointsTest(selectedOptions = {}) {
    const normalised = {};
    Object.keys(selectedOptions).forEach((key) => {
        if (IGNORED_CATEGORIES.has(key)) {
            return;
        }
        normalised[canonicalCategory(key)] = selectedOptions[key];
    });

    const overseasClaimed = claimedPoints(normalised, CATEGORY.OVERSEAS_WORK);
    const australianClaimed = claimedPoints(normalised, CATEGORY.AUSTRALIAN_WORK);
    const employmentClaimed = overseasClaimed + australianClaimed;
    const employmentAwarded = Math.min(employmentClaimed, COMBINED_EMPLOYMENT_CAP);

    const australianStudyAwarded = claimedPoints(normalised, CATEGORY.AUSTRALIAN_STUDY);
    const regionalClaimed = claimedPoints(normalised, CATEGORY.REGIONAL_STUDY);
    const regionalAwarded = australianStudyAwarded > 0 ? regionalClaimed : 0;

    let personalAwarded = employmentAwarded + regionalAwarded;
    PERSONAL_CATEGORIES.forEach((category) => {
        personalAwarded += claimedPoints(normalised, category);
    });

    const warnings = [];
    if (employmentClaimed > employmentAwarded) {
        warnings.push({
            type: 'combined-employment-cap',
            claimed: employmentClaimed,
            awarded: employmentAwarded,
            message: formatEmploymentWarning(employmentClaimed, employmentAwarded),
        });
    }
    if (regionalClaimed > regionalAwarded) {
        warnings.push({
            type: 'regional-study-prerequisite',
            claimed: regionalClaimed,
            awarded: regionalAwarded,
            message: formatRegionalStudyWarning(),
        });
    }

    return {
        personalAwarded,
        pathwayScores: {
            189: personalAwarded + NOMINATION_POINTS[189],
            190: personalAwarded + NOMINATION_POINTS[190],
            491: personalAwarded + NOMINATION_POINTS[491],
        },
        claimed: {
            employment: employmentClaimed,
            regionalStudy: regionalClaimed,
        },
        awarded: {
            employment: employmentAwarded,
            regionalStudy: regionalAwarded,
        },
        warnings,
    };
}

export function alertMessageForSelection(payload, result) {
    if (result.warnings.length > 0) {
        return result.warnings.map((warning) => warning.message).join(' ');
    }
    if (payload.points > 0) {
        return `${payload.points} points awarded`;
    }
    return '';
}
