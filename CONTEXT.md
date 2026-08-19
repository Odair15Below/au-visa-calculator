# Australian Skilled Visa Points Estimate

A client-side quiz that estimates a Total Score under the Points Test for subclasses 189, 190, and 491.

## Language

### Product

**Points Estimate**:
A Total Score claimed from the Points Test, shown against the EOI Floor. It is not a visa grant, an invitation, or legal advice.
_Avoid_: PR calculator as a promise, eligibility result, invitation result

**Eligibility Check**:
Whether occupation, skills assessment, and list placement allow the applicant to lodge a given subclass. Roadmap, not part of scoring.
_Avoid_: occupation search as if it were the Points Estimate

**Invitation Advisor**:
Guidance drawn from SkillSelect invitation rounds about competitive scores. Roadmap, not part of scoring.
_Avoid_: invitation threshold, pass mark (those are not the EOI Floor)

**Visa Overview**:
Short, non-scoring descriptions of skilled visas outside 189 / 190 / 491, so they are not confused with the Points Test.

**Home Affairs Snapshot**:
A dated encoding of the official Points Test table. The app does not fetch live rules.
_Avoid_: live Home Affairs feed, always-current calculator

### Points Test

**Points Test**:
The Schedule 6D scoring rules used to rank SkillSelect applicants for 189, 190, and 491.
_Avoid_: points system, PR points, skilled migration points system

**Points Category**:
One factor in the Points Test from which the applicant picks a single option (Age, English, employment, and so on).

**EOI Floor**:
The 65-point minimum required to lodge an Expression of Interest. Not the score needed to receive an invitation.
_Avoid_: invitation threshold, minimum to migrate, pass mark

**Total Score**:
The sum of points from each Points Category after official caps and Nomination Points.

**Nomination Points**:
Points attached to the chosen subclass: 189 = 0, 190 = +5, 491 = +15.
_Avoid_: visa subclass points as if every subclass were +5

**Combined Employment Cap**:
The maximum of 20 points from Overseas Skilled Employment and Australian Skilled Employment together.

**Regional Study**:
Five extra points for meeting the Australian Study Requirement at a campus in a designated regional area.
_Avoid_: treating regional study as the same as the Australian Study Requirement

**Australian Study Requirement**:
Five points for a degree, diploma, or trade qualification from an Australian institution that took at least two academic years.
_Avoid_: Australian Educational Qualification (the current app label)

### Scored visas

**Subclass 189**:
Skilled Independent — permanent, no nomination, zero Nomination Points.

**Subclass 190**:
Skilled Nominated — permanent, state or territory nomination, five Nomination Points.

**Subclass 491**:
Skilled Work Regional (Provisional) — provisional, state/territory nomination or eligible family sponsorship, fifteen Nomination Points.
