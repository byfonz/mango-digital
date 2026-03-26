import { useState } from "react";

export function useFormStep(totalSteps: number) {
    const [step, setStep] = useState(0);

    const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
    const prev = () => setStep((s) => Math.max(s - 1, 0));
    const goTo = (index: number) => setStep(index);

    return { step, next, prev, goTo }
}
