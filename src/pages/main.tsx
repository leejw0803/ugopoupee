import { useRecoilState } from "recoil";

import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import profileJpeg from "../assets/profile.jpeg";
import profileLogo from "../assets/profile-logo.png";
import twitterPng from "../assets/twitter.png";
import youtubePng from "../assets/youtube.png";
import { contentStore } from "../store/content";

type ColorTypeProps = {
  color: string;
};

const MainDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Typo = styled(Typography)`
  color: #ffffff;
  cursor: pointer;
  text-align: center;
`;

const ColorTypo = styled(Typography)<ColorTypeProps>`
  color: ${({ color }) => color};
`;

const MoreButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 40px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;

  color: black;
  font-weight: 700;
  font-size: 1rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;d
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  button ~ button {
    margin-left: 0.5rem;
  }
`;

const LinkButton = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  height: 3rem;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #dddddd;
  /* font-weight: 700; */
  font-size: 1rem;
`;

const IconButton = styled.button`
  margin-top: 0.5rem;
  height: 3rem;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #dddddd;
  /* font-weight: 700; */
  font-size: 1rem;
`;

const ProfileImg = styled.img`
  width: 100%;
`;

const Logo = styled.img`
  height: 1rem;
  margin: 0 0.5rem;
`;

function MainPage() {
  const [content, setContent] = useRecoilState(contentStore);
  return (
    <MainDiv>
      {content === "tenn" && (
        <>
          <Typo variant="body2">
            .<br />
            <br />
            이걸 읽는 사람이
            <br />
            일기의 내용을 믿을 지는 모르겠으나
            <br />
            그럼에도 이것은 내가 겪은 사실이기에 기록한다.
            <br />
            부디 나와 같은 경험을 한 사람이 있기를 바라며...
            <br />
            하술할 내용은 내가 식물인간이었던
            <br />
            19××년 2월 경부터 11월 1일까지
            <br />
            경험한 일들이다.
            <br />
            <br />
            <br />
            나는 평소 앓던 지병으로 의식을 잃었고
            <br /> 정신을 차려보니 길게 늘어선 줄에 서있었다.
            <br />
            줄은 현실의 어디에서나 흔히 볼 수 있는
            <br />
            티켓부스로 이어졌고
            <br /> 그 너머에는 지금껏 본 적 없는
            <br />
            비현실적인 요소로 가득한 놀이공원이 있었다.
            <br />맨 앞에서 직원으로 추정되는
            <br /> 체구가 작은 소녀가 티켓을 나눠주었고,
            <br /> 사람들은 차례대로 티켓을 받아
            <br /> 각기 다른 곳으로 이동했다.
            <br />내 차례가 오자 티켓을 받고 짧은 설명을 들었다
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              (경황이 없어 소녀의 말을 잘 듣지 못했다).
            </ColorTypo>
            <br />
            <br /> 티켓값이 얼마냐고 묻자
            <br /> 소녀는 상냥한 미소를 지으며 무료라고 답했다.
            <br />
            티켓에는 'Toujours en vie'라고 적혀있었다.
            <br />
            <br />
            <br />
            소녀의 안내 이후 놀이공원 내부로 들어섰다.
            <br />
            얼핏 보면 평범한
            <br /> 할로윈의 테마파크로 보일만한 장소는
            <br /> 물리법칙을 거스르는 어트랙션,
            <br />
            판타지에서나 볼 법한 쇼와 마찬가지로
            <br /> 현실에서는 본 적 없는 먹거리를 파는 푸드코트로
            <br /> 이루어져 있었다
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              (이후 푸드코트에 음식값을 물었으나 역시 무료라고 답했다).
            </ColorTypo>
            <br />
            <br /> 사후세계, 그 중에서도 천국을 방불케하는 장소였다.
            <br />
            아무것도 하지 않은 채 몇 분을 서있었을까
            <br /> 짧은 머리를 한 여성이 나에게 다가왔다.
            <br />
            자신을 레에마이라고 소개한
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              (내가 이름을 알아듣지 못하자 여러번 반복해서 설명했다)
            </ColorTypo>{" "}
            <br /> 여성이 유리코에게 티켓은 잘 받았냐,
            <br /> 왜 모처럼 놀이공원에 와서 즐기지 않느냐 물었다.
            <br />
            그러다 아직 상황파악이 안 된 나를 보고는
            <br /> 문득 인형공방에 놀러가보지 않겠냐고 물었다.
            <br />
            레에마이의 안내를 받아 거미줄이 쳐진
            <br /> 1800년대 양식의 유럽풍 건물에 들어서자
            <br /> 어지럽게 놓인 천이 눈에 들어왔다.
            <br />그 너머, 또 다른 인물이 있었다.
            <br />
            다만 이때의 나는
            <br /> 그 인물의 광기어린 눈을 보고는
            <br /> 공포에 압도되어 도망쳤다
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              (당시에는 그녀의 성별을 파악할 정신도 없었다).
            </ColorTypo>
            <br />
            <br />
            이후 레에마이에게
            <br /> 놀이공원에 대한 설명을 듣고는 잠시 놀랐으나
            <br /> 그녀가 원하는 대로 다른 이들과 섞여
            <br /> 놀이공원을 즐기기로 하였다.
            <br />
            하단의 내용은
            <br /> 레에마이에게 들은 놀이공원에 관한 설명이다.
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              1.
              <br />
              이곳은 죽은 영혼이 주로 오는
              <br /> 놀이공원 Poupée Land로
              <br /> 가끔 나같이 죽지는 않았으나
              <br /> 육체와 연결이 끊어진 영혼도 온다.
              <br />
              길을 잃은 산 사람도 올 때가 있지만
              <br /> 잘 처리하니 우려할 일은 벌어지지 않는다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              2.
              <br />
              직원들은 모두
              <br /> 영혼들이 놀이공원에서 즐겁게 노는 걸 원한다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              3.
              <br />
              유리코는 티켓을 나눠주고
              <br /> 놀이공원에 대한 짧은 설명을 한다.
              <br />
              때때로 나처럼 설명을 잘 듣지 못한 사람들은
              <br /> 레에마이가 추가적인 설명을 하기도 한다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              4.
              <br />
              유리코는 분류작업 또한 함께 한다
              <br />
              (말하던 도중 레에마이가 입을 다물었으나
              <br /> 분명 그렇게 말했다.
              <br /> 어떤 분류를 하는 지는 알 수 없었다)
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              5.
              <br />
              아까 인형공방에서 본 인물은
              <br /> 텐이라는 여성으로
              <br /> '직원'을 만드는 일을 한다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              6.
              <br />
              혹시라도 우메라는 직원을 만날 경우
              <br /> 자신은 먹이가 아님을 강력하게 어필한다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              7.
              <br />
              텐, 우메, 유리코, 레에마이를 제외한 직원들은
              <br /> 다소 불안정한 상태일 수 있다.
            </ColorTypo>
            <br />
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              8.
              <br />
              레에마이는 이 놀이공원의 관리자다.
            </ColorTypo>
            <br />
            <br />
            <br />꽤 오랜 기간동안 놀이공원에서 놀았다 생각했는데
            <br /> 이곳은 끝도 없이 광활해보였고,
            <br /> 언제나 밤처럼 깜깜했다.
            <br />
            곳곳에 설치된 가로등과
            <br /> 언제나 떠있는 보름달만이 빛이 되어주었다.
            <br />
            체감상 두 달 정도 지난 어느 날
            <br /> 처음 보는 새하얗고 키가 큰 소녀가
            <br /> 나에게 말을 걸더니 <br />
            대뜸 나에게 맛있어 보인다며 먹어도 되겠냐 물었다.
            <br />
            나는 이 소녀가 우메임을 직감하고는
            <br /> 나는 그냥 관광객일 뿐이며
            <br /> 병에 걸려 맛도 없을 것이라고 피력했다.
            <br />
            우메는 아쉬운 눈으로 돌아갔다.
            <br />
            몇번인가 더 이런 일이 일어났지만
            <br /> 결론적으로 나에게는 아무 일도 없었다.
            <br />
            <br />
            <br />
            어느 날은 텐의 인형공방에 방문했다.
            <br />
            일전에 도망친 것을 두고 사과도 할 겸
            <br />
            푸드코트에서 맛있는 음료를 사서
            <br />
            <ColorTypo variant="caption" color="#cccccc">
              (물론 돈은 내지 않았지만)
            </ColorTypo>
            <br />
            건물에 들어갔는데
            <br />
            역시나 광기에 찬 눈을 한 텐이 보였다.
            <br />
            음료수를 내밀자 한 방울도 남김없이 비우고는
            <br />
            "힘드네요..."
            <br />
            라는 한 마디와 인사를 끝으로
            <br />
            다시 인형 제작에 몰두했다.
            <br />
            <br />
            <br />
            그리고 아무래도 놀이공원 밖으로는 나갈 수 없는
            <br />
            모양이었다.
            <br />한 번은 내가 놀이공원 외부가 궁금해서
            <br /> 들어왔던 곳으로 나가보려 했는데
            <br /> 유리코가 무서운 얼굴로 다가와서는
            <br /> 나를 제지했다.
            <br />한 번만 더 이런 시도를 했다가는
            <br /> 우메에게 보내버린다기에
            <br /> 다시는 밖을 나갈 생각은 하지 않았다.
            <br />또 한 번은 우메의 레스토랑에 초대를 받았었다.
            <br />
            우메를 따라 도착한 그곳은
            <br /> 푸드코트와는 다른 구역으로 보였고,
            <br /> 건물 입구에 피와 손톱자국 등이 보여
            <br /> 도망쳤다.
            <br />
            <br />
            뒤를 돌아보니 입맛을 다시는 우메가 보였다...
            <br />
            <br /> 그렇게 지낸 지 몇 개월이 지났을까,
            <br /> 어느 날 레에마이가 나를 불렀고
            <br /> 갑작스럽게 프페랜드를 떠나게 되었다.
            <br />
            프페랜드의 유일한 출입구 앞에서 다른 영혼들
            <br />
            몇몇과 함께
            <ColorTypo variant="caption" color="#cccccc">
              (유리코와 우메의 섬뜩한 눈빛을 뒤로 한 채)
            </ColorTypo>
            레에마이와 텐의 배웅을 받으며
            <br /> 프페랜드를 떠났다.
            <br />
            <br /> 눈을 떠보니 병실이었다.
            <br />
            지금 이 일기를 적는 곳은 또다른 병실이다.
            <br /> 날카롭거나 길고 튼튼한 무언가는
            <br /> 철저히 반입이 금지된 여기는
            <br /> ×××정신병원 폐쇄병동.
            <br />
            <br />
            나는 미치지 않았다.
            <br />
            그저 영원히 프페랜드로 돌아가고 싶을 뿐이다.
            <br />
            조금은 무서운 구석도 있지만
            <br /> 너무나도 완벽한 환상 속 세계인 그 곳으로...
            <br />
            나와 같은 경험을 한 사람이
            <br /> 이 일기를 보게 된다면
            <br /> 이 말을 전하고 싶다.
            <br />
            우리 회전목마 앞에서 만납시다.
            <br />
            <br />
            <br />
            사실대로 말하자면 이것은 일기가 아니라 유서이다.
            <br />.
            <br />.
            <br />.
          </Typo>
          <MoreButton onClick={() => setContent("ume")}>
            More about UGPP
          </MoreButton>
        </>
      )}
      {content === "ume" && (
        <>
          <ProfileImg src={profileJpeg} alt="profile" />
          <br />
          <br />
          <br />
          <Typo variant="body2">
            .<br />
            <br />
            오래 전부터 영혼과 사람이 찾아오는 놀이동산 <br />
            <span
              style={{
                fontWeight: 700,
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              Poupée Land.
            </span>{" "}
            <br />
            <br />
            대부분의 손님은 영혼으로, <br />
            그들은 저승과 이승의 경계인 그 공간에서
            <br /> 끝없이 떠돈다. 가끔 혼수 상태이거나 꿈을 꾸는 중인 <br />{" "}
            살아있는 영혼도 찾아오며, <br />
            소문으로는 단순히 길을 잃은 인간도 발견된다고 하지만 이는 확인되지
            않았다.
            <br />
            <br /> 프페랜드의 직원은 총 네 명이다.
            <br />
            <span
              style={{
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              텐, 우메, 유리코, 레에마이
            </span>
            로, <br />
            이들은 실과 영혼으로 이어진 존재들이다. <br />
            <br />
            <br />
            <span style={{ fontWeight: 700 }}>텐</span>은 인형사로,
            <br /> 프페랜드의 손님 중 선별된 영혼을 인형으로 만든다. <br />
            <br />
            <span style={{ fontWeight: 700 }}>우메</span>는 2번째 인형으로,
            <br /> 악한 영혼 또는 잘못 들어온 인간을 잡아먹는다. <br />
            <br />
            <span style={{ fontWeight: 700 }}>유리코</span>는 최초의 인형으로,
            <br /> 프페랜드의 티켓 판매원과 영혼의 일차적 분류를 맡고 있다.{" "}
            <br />
            <br />
            <span style={{ fontWeight: 700 }}>레에마이</span>
            는 영혼들을 다루는 영매사로,
            <br /> 프페랜드의 관리자이다.
            <br />
            <br />
            <br />
            당신도 언젠가 꿈 속에서 프페랜드를
            <br /> 마주하게 될 수 있다. 꿈에서 깨어났을 때,
            <br /> 다시 그 곳으로 돌아가기 위한 시도를 할 것인지, <br />
            아니면 그 곳의 존재를 잊고 살아갈 것인지는
            <br /> 당신의 선택이다.
          </Typo>
        </>
      )}
      {content === "yrk" && (
        <>
          <Box>
            <Typo style={{ fontWeight: 700 }} variant="h6">
              動け！! Poupée Land
            </Typo>
            <Row>
              <IconButton
                onClick={() => window.open("https://twitter.com/Ugopoupee")}
              >
                <Logo src={twitterPng} alt="twitter logo" />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCjpM9rVAudEoV2T5lp5hMog"
                  )
                }
              >
                <Logo src={youtubePng} alt="youtube logo" />
              </IconButton>
            </Row>
          </Box>
          <LinkButton
            onClick={() => window.open("https://twitter.com/UgoPoupee_Tenn")}
          >
            <Logo src={twitterPng} alt="twitter logo" />
            Tenn🪡
          </LinkButton>
          <LinkButton
            onClick={() => window.open("https://twitter.com/UgoPoupee_Ume")}
          >
            <Logo src={twitterPng} alt="twitter logo" />
            Ume🍽
          </LinkButton>
          <LinkButton
            onClick={() => window.open("https://twitter.com/Ugopoupee_YRK")}
          >
            <Logo src={twitterPng} alt="twitter logo" />
            Yuriko🎟
          </LinkButton>
          <LinkButton
            onClick={() => window.open("https://twitter.com/UgoPoupee_My")}
          >
            <Logo src={twitterPng} alt="twitter logo" />
            Reemai🔮
          </LinkButton>
        </>
      )}
      {content === "my" && (
        <>
          <ProfileImg src={profileLogo} alt="profile logo" />
          <br />
          <br />
          <br />
          <Typo>
            動け！！Poupée Land <br />
            2022.04.16~ <br />
            <br />
            <ColorTypo color="#cccccc" variant="body2">
              D+100
            </ColorTypo>
            2022.7.24 <br />
            <br />
            <ColorTypo color="#cccccc" variant="body2">
              D+200
            </ColorTypo>
            2022.11.1 <br />
            <br />
            <br />
            <ColorTypo color="#cccccc" variant="body2">
              Poupée Land 17xx.x.xx~
            </ColorTypo>
          </Typo>
        </>
      )}
    </MainDiv>
  );
}

export default MainPage;
