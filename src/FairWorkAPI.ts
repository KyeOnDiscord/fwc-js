import axios, { AxiosInstance } from "axios";
import { Award } from "./Types";

export class FairWorkAPI {
   private readonly APIKey: string;
   private readonly BaseURL: string = "https://api.fwc.gov.au/api/v1";
   private readonly axiosInstance: AxiosInstance;
   constructor(APIKey: string) {
      this.APIKey = APIKey;
      axios.defaults.baseURL = this.BaseURL;
      this.axiosInstance = axios.create({ baseURL: this.BaseURL });
   }

   public async getAwards(
      page: number = 1,
      limit: number = 10,
      name?: string,
      award_operative_from?: string,
      award_operative_to?: string,
      sort?: string
   ): Promise<Award[]> {
      const resp = await this.axiosInstance.get("/awards", {
         headers: {
            "Cache-Control": "no-cache",
            "Ocp-Apim-Subscription-Key": this.APIKey,
         },
         params: {
            page: page,
            limit: limit,
            name: name ? name : "",
            award_operative_from: award_operative_from ? award_operative_from : "",
            award_operative_to: award_operative_to ? award_operative_to : "",
            sort: sort ? sort : "",
         },
      });

      if (resp.status !== 200) throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      return resp.data.results.map((award: Award) => award);
   }
}
