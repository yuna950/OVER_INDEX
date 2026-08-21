const BASE_URL = "https://overfast-api.tekrop.fr";

// 포지션
export const getRoles = async () => {
  const response = await fetch(`${BASE_URL}/roles?locale=ko-kr`);

  if (!response.ok) {
    throw new Error("포지션 데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

// 영웅
export const getHeroes = async () => {
  const response = await fetch(`${BASE_URL}/heroes?locale=ko-kr`);

  if (!response.ok) {
    throw new Error("영웅 데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

// 영웅 상세정보
export const getHeroDetail = async (heroKey) => {
  const response = await fetch(`${BASE_URL}/heroes/${heroKey}?locale=ko-kr`);

  if (!response.ok) {
    throw new Error("영웅 상세 정보를 불러오지 못했습니다.");
  }

  return response.json();
};

// 맵
export const getMaps = async () => {
  const response = await fetch(`${BASE_URL}/maps`);

  if (!response.ok) {
    throw new Error("맵 데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

// 맵 상세정보
export const getMapDetail = async (mapKey) => {
  const maps = await getMaps();

  return maps.find((map) => map.key === mapKey);
};
