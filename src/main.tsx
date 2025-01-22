import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth-context.tsx";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AgoraRTCProvider client={client}>
				<AuthProvider>
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar={true}
						newestOnTop={true}
						closeOnClick={false}
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Slide}
					/>
					<App />
				</AuthProvider>
			</AgoraRTCProvider>
		</BrowserRouter>
	</StrictMode>
);
