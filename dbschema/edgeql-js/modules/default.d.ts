// GENERATED by @edgedb/generate v0.4.1

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $addressλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "address": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "city": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "country": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "postal_code": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "state": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<address[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<address": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $address = $.ObjectType<"default::address", $addressλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $address: $address

declare const address: $.$expr_PathNode<$.TypeSet<$address, $.Cardinality.Many>, null> 

export declare type $basic_detailsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "designation": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "summary": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "template_design_type": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "address": $.LinkDesc<$address, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "certifications": $.LinkDesc<$certifications, $.Cardinality.Many, {}, false, false,  false, false>;
  "education": $.LinkDesc<$education, $.Cardinality.Many, {}, false, false,  false, false>;
  "languages": $.LinkDesc<$languages, $.Cardinality.Many, {}, false, false,  false, false>;
  "projects": $.LinkDesc<$projects, $.Cardinality.Many, {}, false, false,  false, false>;
  "social_media": $.LinkDesc<$social_media, $.Cardinality.Many, {}, false, false,  false, false>;
  "work_experience": $.LinkDesc<$work_experience, $.Cardinality.Many, {}, false, false,  false, false>;
  "skills": $.LinkDesc<$skills, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
}>;
declare type $basic_details = $.ObjectType<"default::basic_details", $basic_detailsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $basic_details: $basic_details

declare const basic_details: $.$expr_PathNode<$.TypeSet<$basic_details, $.Cardinality.Many>, null> 

export declare type $certificationsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "certification_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "certification_url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<certifications[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<certifications": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $certifications = $.ObjectType<"default::certifications", $certificationsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $certifications: $certifications

declare const certifications: $.$expr_PathNode<$.TypeSet<$certifications, $.Cardinality.Many>, null> 

export declare type $educationλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "course": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "institution": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "marks": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "passout_year": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<education[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<education": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $education = $.ObjectType<"default::education", $educationλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $education: $education

declare const education: $.$expr_PathNode<$.TypeSet<$education, $.Cardinality.Many>, null> 

export declare type $languagesλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "language": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "proficiency": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<languages[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<languages": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $languages = $.ObjectType<"default::languages", $languagesλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $languages: $languages

declare const languages: $.$expr_PathNode<$.TypeSet<$languages, $.Cardinality.Many>, null> 

export declare type $projectsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<projects[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<projects": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $projects = $.ObjectType<"default::projects", $projectsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $projects: $projects

declare const projects: $.$expr_PathNode<$.TypeSet<$projects, $.Cardinality.Many>, null> 

export declare type $skillsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "skills": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "<skills[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<skills": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $skills = $.ObjectType<"default::skills", $skillsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $skills: $skills

declare const skills: $.$expr_PathNode<$.TypeSet<$skills, $.Cardinality.Many>, null> 

export declare type $social_mediaλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "platform": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<social_media[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<social_media": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $social_media = $.ObjectType<"default::social_media", $social_mediaλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $social_media: $social_media

declare const social_media: $.$expr_PathNode<$.TypeSet<$social_media, $.Cardinality.Many>, null> 

export declare type $work_experienceλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "company": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "designation": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "joining_date": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "worked_till": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<work_experience[is basic_details]": $.LinkDesc<$basic_details, $.Cardinality.Many, {}, false, false,  false, false>;
  "<work_experience": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $work_experience = $.ObjectType<"default::work_experience", $work_experienceλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
declare const $work_experience: $work_experience

declare const work_experience: $.$expr_PathNode<$.TypeSet<$work_experience, $.Cardinality.Many>, null> 



export { $address, address, $basic_details, basic_details, $certifications, certifications, $education, education, $languages, languages, $projects, projects, $skills, skills, $social_media, social_media, $work_experience, work_experience };

declare type __defaultExports = {
  "address": typeof address;
  "basic_details": typeof basic_details;
  "certifications": typeof certifications;
  "education": typeof education;
  "languages": typeof languages;
  "projects": typeof projects;
  "skills": typeof skills;
  "social_media": typeof social_media;
  "work_experience": typeof work_experience
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
