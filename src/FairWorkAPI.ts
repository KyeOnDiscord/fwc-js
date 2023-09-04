import axios, { AxiosInstance } from "axios";
import { Award, Classification } from "./Types";

export class FairWorkAPI {
   public readonly APIKey: string;
   public readonly BaseURL: string = "https://api.fwc.gov.au/api/v1";
   public readonly axiosInstance: AxiosInstance;
   /**
    *
    * @param APIKey
    */
   constructor(APIKey: string) {
      this.APIKey = APIKey;
      axios.defaults.baseURL = this.BaseURL;
      this.axiosInstance = axios.create({ baseURL: this.BaseURL });
   }

   /**
    * Retrieve a list of modern awards to support payroll business processes.
    * @param page The page requested of the results retrieved. Default: 1
    * @param limit The number of results to return per page. Default: 10
    * @param name The name of the award. Example: "name"="Fast Food Industry Award 2010"
    * @param award_operative_from The date when the award came into operation. Example: "award_operative_from"="2010-01-01"
    * @param award_operative_to The date when the award ceased to be in effect (was revoked). Example: "award_operative_to"="2010-01-01"
    * @param sort Can be sorted using "code, name, award_fixed_id, award_operative_from, award_operative_to, published_year, version_number, last_modified_datetime". Example "name asc, code desc". Where sort is not specified, the default sort is "published_year" descending.
    * @returns
    */
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
            page,
            limit,
            name,
            award_operative_from,
            award_operative_to,
            sort,
         },
      });

      if (resp.status !== 200) throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      return resp.data.results.map((award: Award) => award);
   }
   /**
    * Retrieve a modern award using the "award_fixed_id" or the award "code" to support payroll business processes.
    * @param id_or_code Search by "award_fixed_id" or "code". Example "id_or_code="12" or "id_or_code"="MA000012".
    * @param page The page requested of the results retrieved. Default: 1
    * @param limit The number of results to return per page. Default: 10
    * @param award_operative_from The date when the award came into operation. Example: "award_operative_from"="2010-01-01"
    * @param award_operative_to The date when the award ceased to be in effect (was revoked). Example: "award_operative_to"="2010-01-01"
    * @param sort Can be sorted using "code, name, award_fixed_id, award_operative_from, award_operative_to, published_year, version_number, last_modified_datetime". Example "name asc, code desc". Where sort is not specified, the default sort is "published_year" descending.
    * @returns
    */
   public async getSpecificAward(
      id_or_code: string,
      page?: number,
      limit?: number,
      award_operative_from?: string,
      award_operative_to?: string,
      sort?: string
   ): Promise<Award[]> {
      const resp = await this.axiosInstance.get(`/awards/${id_or_code}`, {
         headers: {
            "Cache-Control": "no-cache",
            "Ocp-Apim-Subscription-Key": this.APIKey,
         },
         params: {
            page,
            limit,
            award_operative_from,
            award_operative_to,
            sort,
         },
      });

      if (resp.status !== 200) throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      return resp.data.results.map((award: Award) => award);
   }

   public async getAwardClassifications(award: Award): Promise<Classification[]> {
      const resp = await this.axiosInstance.get(`/awards/${award.code}/classifications`, {
         headers: {
            "Cache-Control": "no-cache",
            "Ocp-Apim-Subscription-Key": this.APIKey,
         },
      });
      if (resp.status !== 200) throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      return resp.data.results.map((classification: Classification) => classification);
   }
}
