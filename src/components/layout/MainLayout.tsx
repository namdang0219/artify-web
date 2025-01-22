import { ReactNode } from "react";
import { useAuth } from "../../context/auth-context";
import { Popover } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	return (
		<div className="relative">
			<div className="h-[60px] bg-primary px-5 flex items-center justify-between fixed w-full top-0 left-0">
				<h1 className="text-2xl font-semibold text-white">🌟Artify</h1>
				<div>
					<input type="text" placeholder="検索" className="px-4 py-2.5 w-[500px] rounded-md bg-white bg-opacity-80 outline-none" />
				</div>
				<div className="flex items-center gap-2">
					<div className="text-right text-white">
						<p className="">{currentUser?.displayName}</p>
						<p className="text-sm opacity-70">
							{currentUser?.email}
						</p>
					</div>
					<Popover
						placement="bottomRight"
						content={
							<div className="w-[100px]">
								<button
									onClick={() => {
										signOut(auth);
										navigate("/login");
									}}
								>
									ログアウト
								</button>
							</div>
						}
					>
						<div className="flex items-center justify-center w-12 text-xl font-semibold bg-yellow-100 rounded-full shrink-0 aspect-square">
							{currentUser?.displayName?.slice(0, 1)}
						</div>
					</Popover>
				</div>
			</div>
			<div className="min-h-screen pt-[60px]">{children}</div>
		</div>
	);
};

export default MainLayout;
