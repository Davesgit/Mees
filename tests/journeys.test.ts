import{describe,expect,it}from"vitest";import profilesData from"../test-data/SIMULATION-PROFILES.json" with{type:"json"};import{runJourney}from"../src/simulator/journeys.js";
const get=(id:string)=>runJourney(profilesData.profiles.find((p:any)=>p.id===id));
describe("twelve synthetic learner journeys",()=>{
it("A needs more evidence after one success",()=>{const j=get("SIM-A");expect(j.final.state.state).not.toBe("likely_mastered")});
it("B does not master from one-session repetition",()=>{expect(get("SIM-B").final.state.state).not.toBe("likely_mastered")});
it("C can reach likely mastered with varied spread evidence",()=>{expect(get("SIM-C").final.state.state).toBe("likely_mastered")});
it("D keeps hint use compatible with later independent evidence",()=>{const j=get("SIM-D");expect(j.final.state.supportingEvidence.length).toBeGreaterThan(0)});
it("E asks for independent evidence after strong support",()=>{expect(get("SIM-E").final.state.informationNeeds).toContain("need_independent_evidence")});
it("F records representation change without learner-style label",()=>{const j=get("SIM-F");expect(j.final.interventionSummary.representationChanges).toBe(1);expect(JSON.stringify(j)).not.toContain("visual_learner")});
it("G checks the required prerequisite",()=>{const j=get("SIM-G");expect(j.final.action.type).toBe("check_prerequisite");expect(j.final.action.targetGoalId).toBe("LG-TEST-006")});
it("H requests reassessment for conflicting evidence",()=>{expect(get("SIM-H").final.action.type).toBe("reassess")});
it("I treats technical invalidity as need for valid evidence",()=>{const j=get("SIM-I");expect(j.final.state.state).toBe("unknown");expect(j.final.action.type).toBe("gather_more_evidence")});
it("J retains tutor evidence source",()=>{const j=get("SIM-J");expect(j.final.state.supportingEvidence.some((x:string)=>x.includes("TUTOR"))).toBe(true)});
it("K tutor decline creates no learning evidence",()=>{const j=get("SIM-K");expect(j.final.evidenceCount).toBe(0);expect(j.final.interventionSummary.tutorDeclined).toBe(true)});
it("L stopping creates no extra learning evidence",()=>{const j=get("SIM-L");expect(j.final.evidenceCount).toBe(1);expect(j.final.interventionSummary.stopped).toBe(true)});
});
