import LayoutSideBarSearchBox from "../../components/layoutParts/LayoutSideBarSearchBox";
import Layout from "../../components/layoutParts/Layout";
import ProfileHeading from "../../components/profileParts/ProfileHeading";
import EditButton from "../../components/editParts/EditButton";
import EditSelectParts from "../../components/editParts/EditSelectParts";

const action_edit = () => {

  const areas = [
    { name: "選択してください", value: "選択してください" },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
  ];

  const percents = [
    { name: "選択してください", value: "選択してください" },
    { name: "10%", value: 10 },
    { name: "50%", value: 50 },
    { name: "100%", value: 100 },
  ];

  return (
    <Layout title={"演出家公演編集"}>
      <div style={{ width: "960px" }}>
        <ProfileHeading title={"過去の実績"} />
        <div className="flex">
          <p className="w-1/4 m-3 p-2 border text-center text-base">公演名</p>
          <input
            className="w-3/4 m-3 p-2 border"
            type="text"
            placeholder={"公演名を入力してください"}
            defaultValue={""}
            />
        </div>
        <div className="flex">
          <p className="w-1/4 m-3 p-2 border text-center text-base">公演内容</p>
          <textarea
            className="w-3/4 m-3 p-2 border text-base"
            type="text"
            placeholder={"公演内容を入力してください"}
            defaultValue={""}
            />
        </div>
        <div className="flex">
          <p className="w-1/4 m-3 p-2 border text-center text-base">劇場名</p>
          <input
            className="w-3/4 m-3 p-2 border text-base"
            type="text"
            placeholder={"劇場名を入力してください"}
            defaultValue={""}
            />
        </div>
        <div className="flex justify-between ">
          <div className="w-1/4 ml-4">
            <LayoutSideBarSearchBox
              title="日程"
              inputType="date"
              name1="startDate"
              subTitle1="開始日"
              name2="endDate"
              subTitle2="終了日"
              unit=""
              />
          </div>
          <EditSelectParts title={"公演数"} optionData={areas} />
          <EditSelectParts title={"集客率"} optionData={percents} />
        </div>
        <div className="flex">
          <p className="w-1/4 m-3 p-2 border text-center text-base">
            出演キャスト
          </p>
          <textarea
            className="w-3/4 m-3 p-2 border text-base"
            type="text"
            placeholder={"キャストを入力してください"}
            defaultValue={""}
          />
        </div>
        <EditButton path="/director/profile" title={"保存する"} />
      </div>
    </Layout>
  );
};

export default action_edit;
