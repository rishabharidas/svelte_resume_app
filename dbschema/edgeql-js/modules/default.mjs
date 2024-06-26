// GENERATED by @edgedb/generate v0.4.1

import * as $ from "../reflection.mjs";
import * as _ from "../imports.mjs";
const $address = $.makeType(_.spec, "3d15a7c2-cf69-11ee-85b9-b9bd8a9e18d0", _.syntax.literal);

const address= _.syntax.$PathNode($.$toSet($address, $.Cardinality.Many), null);

const $basic_details = $.makeType(_.spec, "3d1377da-cf69-11ee-9de9-d52842dd9451", _.syntax.literal);

const basic_details= _.syntax.$PathNode($.$toSet($basic_details, $.Cardinality.Many), null);

const $certifications = $.makeType(_.spec, "3d18738c-cf69-11ee-8356-49fabfa9f158", _.syntax.literal);

const certifications= _.syntax.$PathNode($.$toSet($certifications, $.Cardinality.Many), null);

const $education = $.makeType(_.spec, "3d1a99cd-cf69-11ee-acd3-21257be1a20d", _.syntax.literal);

const education= _.syntax.$PathNode($.$toSet($education, $.Cardinality.Many), null);

const $languages = $.makeType(_.spec, "3d1cf7cf-cf69-11ee-ae12-c343cb8d01a0", _.syntax.literal);

const languages= _.syntax.$PathNode($.$toSet($languages, $.Cardinality.Many), null);

const $projects = $.makeType(_.spec, "3d2522d4-cf69-11ee-8234-634f91edd1df", _.syntax.literal);

const projects= _.syntax.$PathNode($.$toSet($projects, $.Cardinality.Many), null);

const $skills = $.makeType(_.spec, "3d1f242e-cf69-11ee-8acf-75b47b86802f", _.syntax.literal);

const skills= _.syntax.$PathNode($.$toSet($skills, $.Cardinality.Many), null);

const $social_media = $.makeType(_.spec, "3d2108fc-cf69-11ee-80df-81423ead4986", _.syntax.literal);

const social_media= _.syntax.$PathNode($.$toSet($social_media, $.Cardinality.Many), null);

const $work_experience = $.makeType(_.spec, "3d22f66c-cf69-11ee-b8cb-6bcf390e546b", _.syntax.literal);

const work_experience= _.syntax.$PathNode($.$toSet($work_experience, $.Cardinality.Many), null);



export { $address, address, $basic_details, basic_details, $certifications, certifications, $education, education, $languages, languages, $projects, projects, $skills, skills, $social_media, social_media, $work_experience, work_experience };

const __defaultExports = {
  "address": address,
  "basic_details": basic_details,
  "certifications": certifications,
  "education": education,
  "languages": languages,
  "projects": projects,
  "skills": skills,
  "social_media": social_media,
  "work_experience": work_experience
};
export default __defaultExports;
