const BASE_URL = "https://api.overpicker.com";

// 영웅 정보
export const getHeroInfo = async () => {
  const response = await fetch(`${BASE_URL}/hero-info`);

  if (!response.ok) {
    throw new Error("영웅 정보를 불러오지 못했습니다.");
  }

  return response.json();
};

// 맵 정보
export const getMapInfo = async () => {
  const response = await fetch(`${BASE_URL}/map-info`);

  if (!response.ok) {
    throw new Error("맵 정보를 불러오지 못했습니다.");
  }

  return response.json();
};
