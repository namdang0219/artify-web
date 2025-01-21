import {
	LocalUser,
	RemoteUser,
	useIsConnected,
	useJoin,
	useLocalMicrophoneTrack,
	useLocalCameraTrack,
	usePublish,
	useRemoteUsers,
} from "agora-rtc-react";
import { useState } from "react";

import "./styles.css";

export const Basics = () => {
	const id = "2408516b7187437e9c7a65f756d341f2"
	// 007eJxTYJjkmOa5REz3Z8Q/39L+x0sVI3t8Hlx231vEbjbfoGBdxQ0FBiMTAwtTQ7Mkc0MLcxNj81TLZPNEM9M0c1OzFGMTwzQjy0996Q2BjAzui84xMTKwMjAyMDGA+AwMAGKHHS4=

	const [calling, setCalling] = useState(false);
	const isConnected = useIsConnected(); // Store the user's connection status
	const [appId, setAppId] = useState(id);
	const [channel, setChannel] = useState("");
	const [token, setToken] = useState("");

	const { data, error, isLoading } = useJoin(
		{ appid: appId, channel: channel, token: token ? token : null },
		calling
	);
	console.log("🚀 ~ Basics ~ isLoading:", isLoading);
	console.log("🚀 ~ Basics ~ error:", error);
	console.log("🚀 ~ Basics ~ data:", data);

	const [micOn, setMic] = useState<boolean>(true);
	const [cameraOn, setCamera] = useState<boolean>(true);
	const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
	const { localCameraTrack } = useLocalCameraTrack(cameraOn);
	usePublish([localMicrophoneTrack, localCameraTrack]);

	const remoteUsers = useRemoteUsers();

	return (
		<>
			<div className="room">
				{/* // highlight-next-line */}
				{isConnected ? (
					<div className="user-list">
						<div className="user">
							<LocalUser
								audioTrack={localMicrophoneTrack}
								cameraOn={cameraOn}
								micOn={micOn}
								videoTrack={localCameraTrack}
								cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
							>
								<samp className="user-name">You</samp>
							</LocalUser>
						</div>
						{remoteUsers.map((user) => (
							<div className="user" key={user.uid}>
								<RemoteUser
									cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
									user={user}
								>
									<samp className="user-name">
										{user.uid}
									</samp>
								</RemoteUser>
							</div>
						))}
					</div>
				) : (
					<div className="join-room">
						<div>🌟</div>
						<input
							onChange={(e) => setAppId(e.target.value)}
							// placeholder="<Your app ID>"
							placeholder="2408516b7187437e9c7a65f756d341f2"
							// value={appId}
						/>
						<input
							onChange={(e) => setChannel(e.target.value)}
							placeholder="<Your channel Name>"
							value={channel}
						/>
						<input
							onChange={(e) => setToken(e.target.value)}
							placeholder="<Your token>"
							value={token}
						/>

						<button
							className={`join-channel ${
								!appId || !channel ? "disabled" : ""
							}`}
							disabled={!appId || !channel}
							onClick={() => setCalling(true)}
						>
							<span>Join Channel</span>
						</button>
					</div>
				)}
			</div>
			{isConnected && (
				<div className="control">
					<div className="left-control">
						<button
							className="btn"
							onClick={() => setMic((a) => !a)}
						>
							<i
								className={`i-microphone ${
									!micOn ? "off" : ""
								}`}
							/>
						</button>
						<button
							className="btn"
							onClick={() => setCamera((a) => !a)}
						>
							<i
								className={`i-camera ${!cameraOn ? "off" : ""}`}
							/>
						</button>
					</div>
					<button
						className={`btn btn-phone ${
							calling ? "btn-phone-active" : ""
						}`}
						onClick={() => setCalling((a) => !a)}
					>
						{calling ? (
							<i className="i-phone-hangup" />
						) : (
							<i className="i-mdi-phone" />
						)}
					</button>
				</div>
			)}
		</>
	);
};

export default Basics;
