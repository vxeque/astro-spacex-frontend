import { type Doc, type APISpaceXResponse } from "./LaunchesVerify";

export const getLatesLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query/", {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          data_unix: "asc",
        },
        limit: 203,
      },
    }),
  });

  const { docs: launches } = (await res.json()) as APISpaceXResponse;

  return launches;
};

export const getLaunchesId = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;

  return launch;
};
