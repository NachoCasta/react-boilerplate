import { useEffect } from "react";

const useClickEvent = handleDocumentClick => {
	useEffect(() => {
		document.addEventListener("click", handleDocumentClick, true);
		return () =>
			document.removeEventListener("click", handleDocumentClick, true);
	});
};

export default useClickEvent;
