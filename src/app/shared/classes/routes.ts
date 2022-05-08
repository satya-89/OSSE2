import { environment as env, environment } from '../../../environments/environment';

const API_URL = env.baseUrl;

export class Routes {

  public static OAUTHTOKEN() {
    return `${API_URL}/token/`;
  }

  public static LOGIN() {
    return `${API_URL}/login`;
  }
  
  public static REGISTER() {
    return `${API_URL}/register/`;
  }

  public static GET_LOCAL_CITIES() {
    return `../admin/assets/json/cities.json`;
  }

  public static GET_STUDENTS() {
    return `${API_URL}/student`;
  }

  public static GET_TUTORS(currentPage: any, size: any) {
    return `${API_URL}/tutor?page=${currentPage}&size=${size}`;
  }

  public static POST_TUTORS() {
    return `${API_URL}/tutor`;
  }

  public static GET_TUTOR_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}`;
  }

  public static POST_TUTOR_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}`;
  }

  public static DELETE_TUTOR_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}`;
  }
    
  public static GET_CLASSES() {
    return `${API_URL}/config/class`;
  }

  public static POST_CLASS() {
    return `${API_URL}/config/class`;
  }

  public static GET_SUBJECTS() {
    return `${API_URL}/config/subject`;
  }

  public static POST_SUBJECT() {
    return `${API_URL}/config/subject`;
  }

  public static GET_NEAR_BY_TUTORS() {
    return `${API_URL}/config/class`;
  }

  public static GET_TUTORS_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}`;
  }

  public static GET_TUTORS_BY_MOBILE(mobileNumber: any, currentPage: any, size: any) {
    return `${API_URL}/tutor?mobile=${mobileNumber}&page=${currentPage}&size=${size}`;
  }

  public static GET_TUTORS_BY_CITY(city: any, currentPage: any, size: any) {
    return `${API_URL}/tutor?city=${city}&page=${currentPage}&size=${size}`;
  }

  public static GET_TUTORS_BY_CITY_MOBILE(city: any, mobileNumber: any, currentPage: any, size: any) {
    return `${API_URL}/tutor?city=${city}&mobile=${mobileNumber}&page=${currentPage}&size=${size}`;
  }

  public static GET_CONFIG_CATEGEORIES() {
    return `${API_URL}/config`;
  }

  public static GET_CATEGEORIES() {
    return `${API_URL}/config/category`;
  }

  public static EDIT_CATEGEORIES() {
    return `${API_URL}/config/category`;
  }

  public static ADD_CATEGORY() {
    return `${API_URL}/config/category`;
  }

  public static ADD_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static EDIT_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static DELETE_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static ADD_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  public static EDIT_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  public static DELETE_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  public static GET_FAQ(type: any) {
    return `${API_URL}/faq?category=${type}`;
  }

  public static ADD_FAQ() {
    return `${API_URL}/faq`;
  }

  public static EDIT_FAQ() {
    return `${API_URL}/faq`;
  }

  public static DELETE_FAQ(id: any) {
    return `${API_URL}/faq/delete/${id}`;
  }

  public static GET_ABOUTUS(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static ADD_ABOUTUS(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static DELETE_ABOUTUS(type: any) {
    return `${API_URL}/text/delete?type=${type}`;
  }

  public static GET_WHYUS(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static ADD_WHYUS(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static DELETE_WHYUS(type: any) {
    return `${API_URL}/text/delete?type=${type}`;
  }
  
  public static GET_PRIVACYPOLICY(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static ADD_PRIVACYPOLICY(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static DELETE_PRIVACYPOLICY(type: any) {
    return `${API_URL}/text/delete?type=${type}`;
  }

  public static GET_TERMSnCONDITIONSTUTOR(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static EDIT_TERMSnCONDITIONSTUTOR(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static DELETE_TERMSnCONDITIONSTUTOR(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static GET_TERMSnCONDITIONSSTUDENT(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static EDIT_TERMSnCONDITIONSSTUDENT(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static DELETE_TERMSnCONDITIONSSTUDENT(type: any) {
    return `${API_URL}/text/?type=${type}`;
  }

  public static GET_STATES() {
    return `${API_URL}/config/state`;
  }
  
  public static GET_CITIES() {
    return `${API_URL}/config/city`;
  }

  public static GET_CITY_BY_STATE_ID(id: any) {
    return `${API_URL}/config/${id}/city`;
  }
  
  public static GET_CITY_BY_NAME(name: any) {
    return `${API_URL}/config/city?name=${name}`;
  }

  public static GET_STUDENT_ENQUIRY(page: any, size: any) {
    return `${API_URL}/job?page=${page}&size=${size}`;
  }

  public static GET_STUDENT_ENQUIRY_BY_ID(seqId: any) {
    return `${API_URL}/job/sequence/${seqId}`;
  }

  public static ADD_STUDENT_ENQUIRY() {
    return `${API_URL}/job`;
  }

  public static EDIT_STUDENT_ENQUIRY(id: any) {
    return `${API_URL}/job`;
  }

  public static DELETE_STUDENT_ENQUIRY(id: any) {
    return `${API_URL}/job`;
  }

  public static GET_SEARCH(urlParameters: any) {
    return `${API_URL}/search?${urlParameters}`;
  }

  public static TUTOR_SEARCH(currentPage: any, size: any, urlParameters: any) {
    return `${API_URL}/tutor?${urlParameters}&page=${currentPage}&size=${size}`;
  }
  
  public static GET_TUTOR_GUARANTOR_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}/guarantor`;
  }

  public static GET_TUTOR_MAP_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}/map`;
  }

  public static GET_TUTOR_ADDRESS_BY_ID(id: any) {
    return `${API_URL}/tutor/${id}/address`;
  }

  public static UPDATE_STUDENT_ENQUIRY_BY_STATUS(id: any, status: any) {
    return `${API_URL}/job/${id}/status?status=${status}`;
  }
  
}
