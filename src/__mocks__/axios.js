export default {
  get: jest.fn(() =>
    Promise.resolve({ data: confirmed, recovered, deaths, lastUpdate })
  )
};
