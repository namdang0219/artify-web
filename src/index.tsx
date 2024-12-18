import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "context/modal-context";
import "react-responsive-modal/styles.css";
import { ModalBase } from "components/modal";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

root.render(
	<React.StrictMode>
		<AgoraRTCProvider client={client}>
			<BrowserRouter>
				<Provider store={store}>
					<ModalProvider>
						<ModalBase />
						<App />
					</ModalProvider>
				</Provider>
			</BrowserRouter>
		</AgoraRTCProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
