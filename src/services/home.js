import request from '@/utils/request';

export async function fetchState(id) {
  return request(`/api/location/${id}`);
}

export async function searchLocation(params) {
  return request('/api/location/search/', {
    method: "GET",
    params
  });
}
