import {atom} from "recoil";
import {IStep} from "./types";


export const steps: IStep[] = [
  {
    stepId: 1,
    prevStepId: undefined,
    nextStepId: 2,
    stepLabel: 'First step',
    isSelected: false,
    isValidated: false
  },
  {
    stepId: 2,
    prevStepId: 1,
    nextStepId: 3,
    stepLabel: 'Second step',
    isSelected: false,
    isValidated: false
  },
  {
    stepId: 3,
    prevStepId: 2,
    nextStepId: undefined,
    stepLabel: 'Third step',
    isSelected: false,
    isValidated: false
  },
];


export const StepsAtom = atom<IStep[]>({
  key: 'steps',
  default: steps
})

export const CurrentStepAtom = atom<IStep>({
  key: 'current_step_atom',
  default: {
    stepId: 1,
    prevStepId: undefined,
    nextStepId: 2,
    stepLabel: 'First step',
    isSelected: false,
    isValidated: false
  },
})