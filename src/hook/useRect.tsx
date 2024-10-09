import { RefObject, useEffect, useState } from "react";

export function useRect(ref: RefObject<HTMLButtonElement>) {
	const [elementRect, setElementRect] = useState<DOMRect>();

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setElementRect(rect);
		}
	}, [ref]);

	return { elementRect };
}
