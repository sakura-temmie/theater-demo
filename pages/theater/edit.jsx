import Layout from "../../components/layoutParts/Layout";
import EditTheaterTop from "../../components/editParts/EditTheaterTop";
import EditTheaterDetail from "../../components/editParts/EditTheaterDetail";

const edit = () => {

  const theater = {
    title: "東京芸術劇場",
    capacity: "最大収容人数　5０００人",
    station: "最寄駅　　JR中央線　ー　新宿駅",
    cost: "希望利用額（１週間）　　　　５０万円",
    address: "171-0021　東京都豊島区西池袋一丁目8番1号",
    schedule: "空きスケジュール　直近1ヶ月（要相談）",
    detail:
      "東京芸術劇場は、東京都が都民のための音楽・演劇・歌劇・舞踊等の芸術文化の振興とその国際的交流を図るため、芸術文化施設として、平成2年10月に開館しました。世界最大級のパイプオルガンを有するクラシック専用の大ホール（コンサートホール）、演劇・舞踊等の公演を行う中ホール（プレイハウス）と2つの小ホール（シアターイーストとシアターウエスト）を備えています。加えて、4つの展示スペース、大小の会議室やリハーサル室も併せ持ち、展示や講座、ワークショップ等、上演以外の芸術活動も行うことができる複合的な芸術文化施設です。当劇場の管理運営は、現在、公益財団法人東京都歴史文化財団が行っています。",
  };

  return (
    <>
      <Layout title={"劇場詳細編集"}>
        <div style={{ width: "960px" }}>
          <EditTheaterTop
            title={theater.title}
            capacity={theater.capacity}
            station={theater.station}
            cost={theater.cost}
            address={theater.address}
            schedule={theater.schedule}
          />
          <EditTheaterDetail detail={theater.detail} />
        </div>
      </Layout>
    </>
  );
};

export default edit;
