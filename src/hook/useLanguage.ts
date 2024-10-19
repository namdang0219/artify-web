import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

export interface ILanguage {
	en: string;
	ja: string;
}

export default function useLanguage(languageObj: ILanguage | ILanguage[]) {
	const { language } = useSelector((state: RootState) => state.global);

	// checkinput param is object or object array
	if (Array.isArray(languageObj)) {
		// return {label1: string, label2: string}
		return languageObj.reduce((acc, obj, index) => {
			acc[`label${index + 1}`] = obj[language];
			return acc;
		}, {} as { [key: string]: string });
	} else {
		// Nếu là object đơn, trả về object với 1 key duy nhất
		return { label: languageObj[language] };
	}
}
