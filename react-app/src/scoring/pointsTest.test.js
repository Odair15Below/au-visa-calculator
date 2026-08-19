import { CATEGORY, scorePointsTest } from './pointsTest';
import { COMBINED_EMPLOYMENT_CAP, EOI_FLOOR, NOMINATION_POINTS } from './snapshot';

function pick(category, points) {
    return { [category]: { option: 'test', points } };
}

describe('scorePointsTest', () => {
    it('adds Nomination Points 0 / 5 / 15 even when personal Awarded Points are 0', () => {
        const result = scorePointsTest({});
        expect(result.personalAwarded).toBe(0);
        expect(result.pathwayScores).toEqual({ 189: 0, 190: 5, 491: 15 });
    });

    it('applies Nomination Points 0 / 5 / 15 on the same personal answers', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.AGE, 30),
            ...pick(CATEGORY.ENGLISH, 10),
            ...pick(CATEGORY.EDUCATION, 15),
        });
        expect(result.personalAwarded).toBe(55);
        expect(result.pathwayScores[189]).toBe(55 + NOMINATION_POINTS[189]);
        expect(result.pathwayScores[190]).toBe(55 + NOMINATION_POINTS[190]);
        expect(result.pathwayScores[491]).toBe(55 + NOMINATION_POINTS[491]);
        expect(result.pathwayScores[189]).toBeLessThan(EOI_FLOOR);
        expect(result.pathwayScores[190]).toBe(60);
        expect(result.pathwayScores[491]).toBe(70);
    });

    it('ignores Visa Subclass radio points', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.AGE, 30),
            'Visa Subclass': { option: 'Subclass 189', points: 5 },
        });
        expect(result.personalAwarded).toBe(30);
        expect(result.pathwayScores[189]).toBe(30);
    });

    it('caps Combined Employment at 20 Awarded Points', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.OVERSEAS_WORK, 15),
            ...pick(CATEGORY.AUSTRALIAN_WORK, 20),
        });
        expect(result.claimed.employment).toBe(35);
        expect(result.awarded.employment).toBe(COMBINED_EMPLOYMENT_CAP);
        expect(result.personalAwarded).toBe(20);
        expect(result.pathwayScores).toEqual({ 189: 20, 190: 25, 491: 35 });
        expect(result.warnings[0].type).toBe('combined-employment-cap');
    });

    it('does not cap employment at or under 20', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.OVERSEAS_WORK, 10),
            ...pick(CATEGORY.AUSTRALIAN_WORK, 10),
        });
        expect(result.awarded.employment).toBe(20);
        expect(result.warnings).toEqual([]);
    });

    it('awards Regional Study 0 without the Australian Study Requirement', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.REGIONAL_STUDY, 5),
            ...pick(CATEGORY.AUSTRALIAN_STUDY, 0),
        });
        expect(result.claimed.regionalStudy).toBe(5);
        expect(result.awarded.regionalStudy).toBe(0);
        expect(result.personalAwarded).toBe(0);
        expect(result.warnings[0].type).toBe('regional-study-prerequisite');
    });

    it('awards Regional Study when Australian Study Requirement is met', () => {
        const result = scorePointsTest({
            ...pick(CATEGORY.AUSTRALIAN_STUDY, 5),
            ...pick(CATEGORY.REGIONAL_STUDY, 5),
        });
        expect(result.awarded.regionalStudy).toBe(5);
        expect(result.personalAwarded).toBe(10);
        expect(result.warnings).toEqual([]);
    });

    it('treats Age 45+ as 0 Awarded Points', () => {
        const result = scorePointsTest(pick(CATEGORY.AGE, 0));
        expect(result.personalAwarded).toBe(0);
        expect(result.pathwayScores[189]).toBe(0);
    });

    it('accepts the old Australian Educational Qualification category name', () => {
        const result = scorePointsTest({
            'Australian Educational Qualification': { option: 'Yes', points: 5 },
            ...pick(CATEGORY.REGIONAL_STUDY, 5),
        });
        expect(result.personalAwarded).toBe(10);
        expect(result.awarded.regionalStudy).toBe(5);
    });
});
