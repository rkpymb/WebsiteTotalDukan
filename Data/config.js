import crypto from "crypto"

const secret = 'shezhuansauce';
let key = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);

export const BASE_URL = 'https://server.toladukan.com/';
export const DO_SPACES_URL = 'https://fmenew.sgp1.cdn.digitaloceanspaces.com/';
export const DO_SPACES_FOLDER = 'TolaDukan/Content'
export const API_URL = 'https://consultancy.itechpandas.com/';
export const AppName = 'Toladukan';
export const AppDesc = 'Innovative Best Education for a Smarter Tomorrow : Best Courses in india, Exam Ready Online Courses';
export const DomainURL = 'toladukan.com';
export const CryptoJSKEY = 'XYZ';
export const CryptoKey =key;
export const RazorPayKeyid = 'rzp_test_2OIlpARet0GTeY'
export const RazorPaySecretkey = 'OugT3Qa77k6drclGr1yjXyip'
export const MYKEY = '86afb51e932292b013a62196f4181f6e'
// export const MediaFilesUrl = 'https://demoapi.hormosync.com/';
export const MediaFilesUrl = 'https://demoapi.hormosync.com/';
export const MediaFilesFolder = 'images'

export const SocialHandles = {
    Facebook: 'https://www.facebook.com/toladukan',
    Twitter: 'https://twitter.com/toladukan',
    Instagram: 'https://www.instagram.com/toladukan',
    Linkedin: 'https://www.linkedin.com/toladukan',

};
export const ShortAbout = 'is the innovative start-up inventive feature based web portal that help our valuable users to shop independently with right amount of knowledge and with easy navigation. stop shop for all FMCG products, brings to you it’s experiences.'
export const Contactinfo = {
    MainMobile: '+91 0000000000',
    MainAddress: '3rd Floor, Bhabua, kaimur, Bihar, 821101 IN.',
    ContactEmail: 'hi@toladukan.com',
};

