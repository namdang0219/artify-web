import {
	useIsConnected,
	useJoin,
	useLocalMicrophoneTrack,
	useLocalCameraTrack,
	usePublish,
	useRemoteUsers,
	LocalUser,
	RemoteUser,
} from "agora-rtc-react";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdCallEnd } from "react-icons/md";
import { useNavigate } from "react-router";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";
// import "./styles.css";

export const Basics = ({ liveId }: { liveId: string }) => {
	const [calling, setCalling] = useState(false);
	const isConnected = useIsConnected(); // Store the user's connection status
	const [appId, setAppId] = useState("bf99fafeafd9400ca4b216041afcac8b");
	const [channel, setChannel] = useState(liveId.toString());
	const [token, setToken] = useState("");
	const navigate = useNavigate();
	const [living, setLiving] = useState(true);

	useEffect(() => {
		setCalling(true);
	}, []);

	useJoin(
		{ appid: appId, channel: channel, token: token ? token : null },
		calling
	);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "lives", String(liveId)), (doc) => {
			if (doc.data()) {
				setLiving(true);
			} else {
				setLiving(false);
                toast.warning("ライブが終了しました");
                navigate("/")
			}
		});
		return () => {
			unsub();
		};
	}, []); // Empty dependency array means this runs only on mount/unmount

	const [micOn, setMic] = useState(true);
	const [cameraOn, setCamera] = useState(true);
	const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
	const { localCameraTrack } = useLocalCameraTrack(cameraOn);
	usePublish([localMicrophoneTrack, localCameraTrack]);

	const remoteUsers = useRemoteUsers();

    if(!living) {
        return <div>ライブが終了しました</div>
    }

	return (
		<>
			<div className="room">
				{isConnected ? (
					<div className="user-list">
						<div className="bg-white h-[600px] aspect-video">
							<LocalUser
								audioTrack={localMicrophoneTrack}
								cameraOn={cameraOn}
								micOn={micOn}
								videoTrack={localCameraTrack}
								// cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
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
						<input
							onChange={(e) => setAppId(e.target.value)}
							placeholder="<Your app ID>"
							value={appId}
						/>
						<input
							onChange={(e) => setChannel(e.target.value)}
							placeholder="<Your channel Name>"
							value={channel}
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
				<div className="absolute bottom-0 left-0 z-50 flex items-center justify-center px-5 py-2">
					<button
						onClick={() => {
							setCalling(false);
							deleteDoc(doc(db, "lives", String(liveId)));
							navigate("/");
						}}
						className="block px-4 py-2 bg-red-500 rounded-lg"
					>
						<MdCallEnd size={30} color="white" />
					</button>
				</div>
			)}
		</>
	);
};

export default Basics;
