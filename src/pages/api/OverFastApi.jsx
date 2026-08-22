const BASE_URL = "https://overfast-api.tekrop.fr";

const fetchOverFast = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}?locale=ko-kr`);

  if (!response.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

// 포지션
export const getPosition = () => {
  return fetchOverFast("/roles");
};

// 영웅
export const getHeroes = () => {
  return fetchOverFast("/heroes");
};

// 영웅 상세정보
export const getHeroDetail = (heroKey) => {
  return fetchOverFast(`/heroes/${heroKey}`);
};

const fetchStats = async (endpoint) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?platform=pc&gamemode=quickplay&region=asia&order_by=hero:asc`,
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

// 픽률
export const getHeroStats = async () => {
  return fetchStats(`/heroes/stats`);
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
