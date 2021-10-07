import Layout from "../../components/layoutParts/Layout";
import ProfileTopParts from "../../components/profileParts/ProfileTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileResultsArea from "../../components/profileParts/ProfileResultsArea";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import noImage from "../../public/imgPlaceholder.png";

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
          localStorage.setItem("d_data", JSON.stringify(data.data));
          localStorage.setItem("d_data_p", JSON.stringify(data.data.main_photo));
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
    photo: `${directorData.main_photo}`,
    cost: `${directorDetail.desired_price}`,
    schedule: `${directorDetail.free_schedule}`,
  };

  const results = {
    title: `${directorPerformance.name}`,
  };

  const imgPath = "https://theater-check.s3.ap-northeast-1.amazonaws.com/";
  const truePath = imgPath + director.photo;
  const image = directorData.main_photo == null ? noImage : truePath;


  return (
    <Layout title={"演出家詳細"}>
      <div style={{ width: "960px" }}>
        <ProfileTopParts
          name={director.name}
          profile={director.profile}
          cost={director.cost}
          schedule={director.schedule}
          img={image}
        />
        <ProfileMiddleParts />
        <ProfileResultsArea resultApi={directorPerformance} />
      </div>
    </Layout>
  );
};

export default Profile;
