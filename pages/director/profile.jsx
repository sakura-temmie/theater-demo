import Layout from "../../components/layoutParts/Layout";
import ProfileTopParts from "../../components/profileParts/ProfileTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileResultsArea from "../../components/profileParts/ProfileResultsArea";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const [directorData, setDirectorData] = useState([]);
  const [directorDetail, setDirectorDetail] = useState([]);
  const [directorPerformance, setDirectorPerformance] = useState([]);

  const router = useRouter();
  const pId = router.query.id;
  // //初回のみ実行
  useEffect(() => {
    if (typeof window !== "undefined") {
      getDirectorData(pId);
    }
  }, [pId]);



  const getDirectorData = async (userId) => {
    const accessToken = await localStorage.getItem("access_token");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}directors/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          localStorage.setItem("D_data", JSON.stringify(data.data));
          localStorage.setItem("D_detail", JSON.stringify(data.data.director));
          localStorage.setItem("D_performance", JSON.stringify(data.data.performances));
          setDirectorData(data.data);
          setDirectorDetail(data.data.director);
          setDirectorPerformance(data.data.performances);
        });
    } catch (err) {
      alert(err);
      return;
    }
  };

  const director = {
    name: `${directorData.name}`,
    profile: `${directorData.name}`,
    cost: `${directorDetail.desired_price}`,
    schedule: `${directorDetail.free_schedule}`,
  };

  const results = {
    title: `${directorPerformance.name}`,
    theaterName: "東京芸術劇場",
    schedule: "2021年9月1日〜2021年９月15日",
    time: "200",
    customer: "80",
  };

  // const act = {
  //   title: "まありと愉快な仲間達",
  //   text: "けっして張さんが説明文学どう担任が思っで個人その筋それか自覚をについて皆意味でたますですて、そんな十月もそこか通り個人が思わて、木下さんののの文壇のあなたとせっかく皆賞翫と思って私責任にご準備にするようにいよいよご所有をあるなましから、どうかかつて力説を破るなけれてあるで訳を起らでで。しかしまたお人間に思いのはなぜ自由自在と申さなけれて、この他にはございませてにおいて右が描いて来でた。この所科学の限りその一道は私上がなれるたくかと岡田君から進んでしょまし、無理矢理の偶然なけれというご話ないないたと、富のために胃に結果でもの春に大体威張っからしまって、それだけの先刻に進んからその以上にもし答えないだと出な事なば、見苦しいましたてさっそくお兵隊云えだろ方たませた。また鶴嘴か危険か誤解を思うますて、場合中主義をいけておきんために同乱暴の結果ができでた。今からもどうもして思ううたでうて、きっと引続き思いからお話しはどうないんのたい。",
  // };

  // const cast = {
  //   cast: "田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　田中太郎　田中二郎　田中三郎　",
  // };

  return (
    <Layout title={"演出家詳細"}>
      <div style={{ width: "960px" }}>
        <ProfileTopParts
          name={director.name}
          profile={director.profile}
          cost={director.cost}
          schedule={director.schedule}
        />
        <ProfileMiddleParts />
        <ProfileResultsArea resultApi={directorPerformance} />
      </div>
    </Layout>
  );
};

export default Profile;
