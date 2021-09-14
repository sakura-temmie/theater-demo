import Layout from "../../components/layoutParts/Layout";
import ProfileButton from "../../components/profileParts/ProfileButton";
import ProfileTopParts from "../../components/profileParts/ProfileTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileActorResults from "../../components/profileParts/ProfileActorResults";

const profile = () => {

  const director = {
    name: "かくまあり",
    profile: "はじめまして。△△で、□□の仕事をしています。趣味は○○です。休みの日はよく、◎◎をして過ごしています。",
    cost: "希望利用額（１週間）　　　　５０万円",
    schedule: "空きスケジュール　直近1ヶ月（要相談）",
  };

  const results = {
    title: "まありと愉快な仲間達",
    theaterName: "東京芸術劇場",
    schedule: "2021年9月1日〜2021年９月15日",
    time: "200",
    customer: "80"
  }

  const act = {
    title: "まありと愉快な仲間達",
    text: "けっして張さんが説明文学どう担任が思っで個人その筋それか自覚をについて皆意味でたますですて、そんな十月もそこか通り個人が思わて、木下さんののの文壇のあなたとせっかく皆賞翫と思って私責任にご準備にするようにいよいよご所有をあるなましから、どうかかつて力説を破るなけれてあるで訳を起らでで。しかしまたお人間に思いのはなぜ自由自在と申さなけれて、この他にはございませてにおいて右が描いて来でた。この所科学の限りその一道は私上がなれるたくかと岡田君から進んでしょまし、無理矢理の偶然なけれというご話ないないたと、富のために胃に結果でもの春に大体威張っからしまって、それだけの先刻に進んからその以上にもし答えないだと出な事なば、見苦しいましたてさっそくお兵隊云えだろ方たませた。また鶴嘴か危険か誤解を思うますて、場合中主義をいけておきんために同乱暴の結果ができでた。今からもどうもして思ううたでうて、きっと引続き思いからお話しはどうないんのたい。",
  };

  const cast = {
    cast: "田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　",
  };

  return (
    <>
      <Layout title={"演出家詳細"}>
        <div style={{ width: "960px" }}>
          <ProfileButton path="/director/profile_edit" title="編集する" />
          <ProfileTopParts
            name={director.name}
            profile={director.profile}
            cost={director.cost}
            schedule={director.schedule}
          />
          <ProfileMiddleParts />
          <ProfileButton path="/director/action_edit" title={"追加する"} />
          <ProfileActorResults
            title={results.title}
            theaterName={results.theaterName}
            schedule={results.schedule}
            time={results.time}
            customer={results.customer}
            actButton={"作品内容"}
            actModalTitle={act.title}
            actModalText={act.text}
            castButton={"出演キャスト"}
            castModalTitle={"出演キャスト"}
            castModalText={cast.cast}
          />
        </div>
      </Layout>
    </>
  );
}

export default profile;
