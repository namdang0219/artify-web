import { Button } from "components/button";
import { signOut } from "firebase/auth";
import { auth } from "firebaseConfig";
import MainLayout from "layout/MainLayout";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const ProfilePage = () => {
	const { photoURL, displayName, email, role } = useSelector(
		(state: RootState) => state.user
	);

	return (
		<MainLayout>
			<div className="pb-0 content-layout bg-bgLight">
				<div className="bg-white w-full max-w-[900px] mx-auto h-full rounded-tl-round15 rounded-tr-round15 shadow-md p-8">
					{/* content  */}
					<div className="flex items-center justify-between">
						{/* left container  */}
						<div className="flex items-center gap-8">
							{/* avatar  */}
							<div className="size-[160px] rounded-full overflow-hidden">
								<img
									src={photoURL}
									alt="user-profile-img"
									className="object-cover object-center w-full h-full"
								/>
							</div>

							{/* user information  */}
							<div>
								<div className="flex items-center gap-5">
									<h2 className="text-3xl font-bold">
										{displayName}
									</h2>
									<span className="px-2 py-1 mt-1 text-sm text-white bg-green-500 rounded-md">
										{role === "STUDENT" ? "学生" : "講師"}
									</span>
								</div>
								<p className="text-sm text-darkGray">{email}</p>
							</div>
						</div>

						{/* right container  */}
						<div className="flex items-center gap-6">
							<Button>編集</Button>
						</div>
						<Button onClick={() => signOut(auth)}>
							ログアウト
						</Button>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ProfilePage;
