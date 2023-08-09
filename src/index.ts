//Import types
import { FairWorkAPI } from "./FairWorkAPI";
console.log("starting...");
const apiKey: string = "445c02d819544141a77c50e394bfc409";

const api = new FairWorkAPI(apiKey);

api.getAwards(1, 10, "Fast Food").then((data) => {
   console.log(JSON.stringify(data));
});
