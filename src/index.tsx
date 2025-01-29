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
import { Slide, ToastContainer } from "react-toastify";
import { AuthProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
// const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

root.render(
	<React.StrictMode>
		<ToastContainer
			position="top-center"
			autoClose={3000}
			hideProgressBar={true}
			newestOnTop={true}
			closeOnClick={true}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
			transition={Slide}
		/>
		{/* <AgoraRTCProvider client={client}> */}
		<BrowserRouter>
			<AuthProvider>
				<Provider store={store}>
					<ModalProvider>
						<ModalBase />
						<App />
					</ModalProvider>
				</Provider>
			</AuthProvider>
		</BrowserRouter>
		{/* </AgoraRTCProvider> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
