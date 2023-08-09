export interface Award {
   award_fixed_id: number; //A unique code for this instance of the modern award resource that is fixed over each year
   award_id: number; //Unique identification number of award
   award_operative_from: Date; //The date when the award came into operation
   award_operative_to?: Date; //The date when the award ceased to be in effect (was revoked).
   code: string; //The code assigned to the modern award. Also known as the award number.
   name: string; //The code assigned to the modern award. Also known as the award number.
   last_modified_datetime: Date; //The date and time when the modern award was last modified
   published_year: string; //Year in which the minimum rates of pay were determined in the annual wage review.
   version_number: number; //This number indicates the version of the award resource. It is incremented by one each time the resource is updated.
}

export interface Classification {
   award_fixed_id: number; //A unique code for this instance of the modern award resource that is fixed over each year
   base_pay_rate_id?: string; //A unique identification number of the base pay rate resource. Values have the prefix (“BR”).
   base_rate?: number; // Base rate of classification in clause
   base_rate_type?: string; //Base rate type (Weekly, Hourly, Annual, Daily, Piecerate)
   calculate_pay_rate_id?: string; //A unique identification number of the calculated pay rate resource. Values have the prefix (“CR”).
   calculated_rate_type?: string; // Calculated rate type (Hourly, Weekly, Annual, Daily, Fortnightly, Casual Hourly)
   calculated_rate?: number; //Calculate rate of classification within clause - derived value from base rate.
   classification: string; //Sub level classification of clause
   classification_fixed_id: string; // Unique identification number of classification that is fixed over each year
   classification_level?: number; //A numerical representation of the classification within the hierarchical structure of classifications in a clause. Starts at 1 for the lowest level classification.
   clause_description?: string; //Clause description
   clause_fixed_id?: number; //Unique identification number of clauses that is fixed over each year.
   clauses?: string; //Clause number
   code: string; //The code assigned to the modern award. Also known as the award number.
   employee_rate_type_code?: string; //An indicator if the rate is for an adult or otherwise: AD - Adult, JN - Junior, AP - Apprentice,AA - Adult apprentice,TN - Trainee rates,XT - Exited from trainee-ship but not an Adult,CA - Cadet
   last_modified_datetime: Date; //This is the date and time that the resource was last modified.
   next_down_classification_fixed_id?: number; //Refers to the classification_fixed_id for the next logical classification down the classification hierarchy.
   next_up_classification_fixed_id?: number; //Refers to the classification_fixed_id for the next logical classification up the classification hierarchy.
   operative_from: Date; //The date on which the classification came into effect.
   operative_to?: Date; //The date on which the classification ceased to be in effect.
   parent_classification_name?: string; //Parent level classification of clause
   published_year: number; //Year in which the minimum rates of pay were determined in the annual wage review.
   version_number: number; //This number indicates the version of the award resource. It is incremented by one each time the resource is updated.
}
