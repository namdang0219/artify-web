import { RefObject, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export function useRect(ref: RefObject<HTMLButtonElement>) {
	const [elementRect, setElementRect] = useState<DOMRect>();
	const windowSize = useWindowSize();

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setElementRect(rect);
		}
	}, [ref, windowSize]);

	return { elementRect };
}
