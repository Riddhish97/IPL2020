module.exports = {
      super_password: 'admin@wcg',
      cookie: {
            "secret": "session",
            "key": "abhre5asdsafUf4xc97Rd0KnddSsd3V"
      },
      session: {
            secret: "abhH4re5Uf4Rd0KnddS05sdff3V",
            resave: true,
            saveUninitialized: true,
            maxAge: Date.now() + (30 * 86400 * 1000)
      },
      ignore_routes: ['index', 'call', "widget-app"],
      dst_time_zone_mapping: {
            "+05:30": "+05:30",
            "-09:00": "-08:00",
            "-08:00": "-07:00",
            "-07:00": "-06:00",
            "-06:00": "-05:00",
            "-05:00": "-04:00"
      },
      time_zone_name_mapping: {
            "+05:30": "IST",
            "-09:00": "AKST",
            "-08:00": "PST",
            "-07:00": "MST",
            "-06:00": "CST",
            "-05:00": "EST"
      },
      // flag for check dst is started or not, set true when dst start and set false when dst stop
      is_dst: true,
      timezones_list: [{
                  "key": "AF_UTC+04:30",
                  "value": "Afghanistan - Asia/Kabul"
            },
            {
                  "key": "AX_UTC+02:00",
                  "value": "Aland Islands - Europe/Mariehamn"
            },
            {
                  "key": "AL_UTC+01:00",
                  "value": "Albania - Europe/Tirane"
            },
            {
                  "key": "DZ_UTC+01:00",
                  "value": "Algeria - Africa/Algiers"
            },
            {
                  "key": "AS_UTC-11:00",
                  "value": "American Samoa - Pacific/Pago_Pago"
            },
            {
                  "key": "AD_UTC+01:00",
                  "value": "Andorra - Europe/Andorra"
            },
            {
                  "key": "AO_UTC+01:00",
                  "value": "Angola - Africa/Luanda"
            },
            {
                  "key": "AI_UTC-04:00",
                  "value": "Anguilla - America/Anguilla"
            },
            {
                  "key": "AQ_UTC+08:00",
                  "value": "Antarctica - Antarctica/Casey"
            },
            {
                  "key": "AQ_UTC+07:00",
                  "value": "Antarctica - Antarctica/Davis"
            },
            {
                  "key": "AQ_UTC+10:00",
                  "value": "Antarctica - Antarctica/DumontDUrville"
            },
            {
                  "key": "AQ_UTC+05:00",
                  "value": "Antarctica - Antarctica/Mawson"
            },
            {
                  "key": "AQ_UTC+13:00",
                  "value": "Antarctica - Antarctica/McMurdo"
            },
            {
                  "key": "AQ_UTC-03:00",
                  "value": "Antarctica - Antarctica/Palmer"
            },
            {
                  "key": "AQ_UTC-03:00",
                  "value": "Antarctica - Antarctica/Rothera"
            },
            {
                  "key": "AQ_UTC+03:00",
                  "value": "Antarctica - Antarctica/Syowa"
            },
            {
                  "key": "AQ_UTC+00:00",
                  "value": "Antarctica - Antarctica/Troll"
            },
            {
                  "key": "AQ_UTC+06:00",
                  "value": "Antarctica - Antarctica/Vostok"
            },
            {
                  "key": "AG_UTC-04:00",
                  "value": "Antigua and Barbuda - America/Antigua"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Buenos_Aires"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Catamarca"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Cordoba"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Jujuy"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/La_Rioja"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Mendoza"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Rio_Gallegos"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Salta"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/San_Juan"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/San_Luis"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Tucuman"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Ushuaia"
            },
            {
                  "key": "AM_UTC+04:00",
                  "value": "Armenia - Asia/Yerevan"
            },
            {
                  "key": "AW_UTC-04:00",
                  "value": "Aruba - America/Aruba"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Antarctica/Macquarie"
            },
            {
                  "key": "AU_UTC+10:30",
                  "value": "Australia - Australia/Adelaide"
            },
            {
                  "key": "AU_UTC+10:00",
                  "value": "Australia - Australia/Brisbane"
            },
            {
                  "key": "AU_UTC+10:30",
                  "value": "Australia - Australia/Broken_Hill"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Currie"
            },
            {
                  "key": "AU_UTC+09:30",
                  "value": "Australia - Australia/Darwin"
            },
            {
                  "key": "AU_UTC+08:45",
                  "value": "Australia - Australia/Eucla"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Hobart"
            },
            {
                  "key": "AU_UTC+10:00",
                  "value": "Australia - Australia/Lindeman"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Lord_Howe"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Melbourne"
            },
            {
                  "key": "AU_UTC+08:00",
                  "value": "Australia - Australia/Perth"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Sydney"
            },
            {
                  "key": "AT_UTC+01:00",
                  "value": "Austria - Europe/Vienna"
            },
            {
                  "key": "AZ_UTC+04:00",
                  "value": "Azerbaijan - Asia/Baku"
            },
            {
                  "key": "BS_UTC-05:00",
                  "value": "Bahamas - America/Nassau"
            },
            {
                  "key": "BH_UTC+03:00",
                  "value": "Bahrain - Asia/Bahrain"
            },
            {
                  "key": "BD_UTC+06:00",
                  "value": "Bangladesh - Asia/Dhaka"
            },
            {
                  "key": "BB_UTC-04:00",
                  "value": "Barbados - America/Barbados"
            },
            {
                  "key": "BY_UTC+03:00",
                  "value": "Belarus - Europe/Minsk"
            },
            {
                  "key": "BE_UTC+01:00",
                  "value": "Belgium - Europe/Brussels"
            },
            {
                  "key": "BZ_UTC-06:00",
                  "value": "Belize - America/Belize"
            },
            {
                  "key": "BJ_UTC+01:00",
                  "value": "Benin - Africa/Porto-Novo"
            },
            {
                  "key": "BM_UTC-04:00",
                  "value": "Bermuda - Atlantic/Bermuda"
            },
            {
                  "key": "BT_UTC+06:00",
                  "value": "Bhutan - Asia/Thimphu"
            },
            {
                  "key": "BO_UTC-04:00",
                  "value": "Bolivia - America/La_Paz"
            },
            {
                  "key": "BQ_UTC-04:00",
                  "value": "Bonaire, Saint Eustatius and Saba - America/Kralendijk"
            },
            {
                  "key": "BA_UTC+01:00",
                  "value": "Bosnia and Herzegovina - Europe/Sarajevo"
            },
            {
                  "key": "BW_UTC+02:00",
                  "value": "Botswana - Africa/Gaborone"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Araguaina"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Bahia"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Belem"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Boa_Vista"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Campo_Grande"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Cuiaba"
            },
            {
                  "key": "BR_UTC-05:00",
                  "value": "Brazil - America/Eirunepe"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Fortaleza"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Maceio"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Manaus"
            },
            {
                  "key": "BR_UTC-02:00",
                  "value": "Brazil - America/Noronha"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Porto_Velho"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Recife"
            },
            {
                  "key": "BR_UTC-05:00",
                  "value": "Brazil - America/Rio_Branco"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Santarem"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Sao_Paulo"
            },
            {
                  "key": "IO_UTC+06:00",
                  "value": "British Indian Ocean Territory - Indian/Chagos"
            },
            {
                  "key": "VG_UTC-04:00",
                  "value": "British Virgin Islands - America/Tortola"
            },
            {
                  "key": "BN_UTC+08:00",
                  "value": "Brunei - Asia/Brunei"
            },
            {
                  "key": "BG_UTC+02:00",
                  "value": "Bulgaria - Europe/Sofia"
            },
            {
                  "key": "BF_UTC+00:00",
                  "value": "Burkina Faso - Africa/Ouagadougou"
            },
            {
                  "key": "BI_UTC+02:00",
                  "value": "Burundi - Africa/Bujumbura"
            },
            {
                  "key": "KH_UTC+07:00",
                  "value": "Cambodia - Asia/Phnom_Penh"
            },
            {
                  "key": "CM_UTC+01:00",
                  "value": "Cameroon - Africa/Douala"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Atikokan"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Blanc-Sablon"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Cambridge_Bay"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Creston"
            },
            {
                  "key": "CA_UTC-08:00",
                  "value": "Canada - America/Dawson"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Dawson_Creek"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Edmonton"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Fort_Nelson"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Glace_Bay"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Goose_Bay"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Halifax"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Inuvik"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Iqaluit"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Moncton"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Nipigon"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Pangnirtung"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Rainy_River"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Rankin_Inlet"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Regina"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Resolute"
            },
            {
                  "key": "CA_UTC-03:30",
                  "value": "Canada - America/St_Johns"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Swift_Current"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Thunder_Bay"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Toronto"
            },
            {
                  "key": "CA_UTC-08:00",
                  "value": "Canada - America/Vancouver"
            },
            {
                  "key": "CA_UTC-08:00",
                  "value": "Canada - America/Whitehorse"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Winnipeg"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Yellowknife"
            },
            {
                  "key": "CV_UTC-01:00",
                  "value": "Cape Verde - Atlantic/Cape_Verde"
            },
            {
                  "key": "KY_UTC-05:00",
                  "value": "Cayman Islands - America/Cayman"
            },
            {
                  "key": "CF_UTC+01:00",
                  "value": "Central African Republic - Africa/Bangui"
            },
            {
                  "key": "TD_UTC+01:00",
                  "value": "Chad - Africa/Ndjamena"
            },
            {
                  "key": "CL_UTC-03:00",
                  "value": "Chile - America/Punta_Arenas"
            },
            {
                  "key": "CL_UTC-03:00",
                  "value": "Chile - America/Santiago"
            },
            {
                  "key": "CL_UTC-05:00",
                  "value": "Chile - Pacific/Easter"
            },
            {
                  "key": "CN_UTC+08:00",
                  "value": "China - Asia/Shanghai"
            },
            {
                  "key": "CN_UTC+06:00",
                  "value": "China - Asia/Urumqi"
            },
            {
                  "key": "CX_UTC+07:00",
                  "value": "Christmas Island - Indian/Christmas"
            },
            {
                  "key": "CC_UTC+06:30",
                  "value": "Cocos Islands - Indian/Cocos"
            },
            {
                  "key": "CO_UTC-05:00",
                  "value": "Colombia - America/Bogota"
            },
            {
                  "key": "KM_UTC+03:00",
                  "value": "Comoros - Indian/Comoro"
            },
            {
                  "key": "CK_UTC-10:00",
                  "value": "Cook Islands - Pacific/Rarotonga"
            },
            {
                  "key": "CR_UTC-06:00",
                  "value": "Costa Rica - America/Costa_Rica"
            },
            {
                  "key": "HR_UTC+01:00",
                  "value": "Croatia - Europe/Zagreb"
            },
            {
                  "key": "CU_UTC-05:00",
                  "value": "Cuba - America/Havana"
            },
            {
                  "key": "CW_UTC-04:00",
                  "value": "Curaçao - America/Curacao"
            },
            {
                  "key": "CY_UTC+02:00",
                  "value": "Cyprus - Asia/Famagusta"
            },
            {
                  "key": "CY_UTC+02:00",
                  "value": "Cyprus - Asia/Nicosia"
            },
            {
                  "key": "CZ_UTC+01:00",
                  "value": "Czech Republic - Europe/Prague"
            },
            {
                  "key": "CD_UTC+01:00",
                  "value": "Democratic Republic of the Congo - Africa/Kinshasa"
            },
            {
                  "key": "CD_UTC+02:00",
                  "value": "Democratic Republic of the Congo - Africa/Lubumbashi"
            },
            {
                  "key": "DK_UTC+01:00",
                  "value": "Denmark - Europe/Copenhagen"
            },
            {
                  "key": "DJ_UTC+03:00",
                  "value": "Djibouti - Africa/Djibouti"
            },
            {
                  "key": "DM_UTC-04:00",
                  "value": "Dominica - America/Dominica"
            },
            {
                  "key": "DO_UTC-04:00",
                  "value": "Dominican Republic - America/Santo_Domingo"
            },
            {
                  "key": "TL_UTC+09:00",
                  "value": "East Timor - Asia/Dili"
            },
            {
                  "key": "EC_UTC-05:00",
                  "value": "Ecuador - America/Guayaquil"
            },
            {
                  "key": "EC_UTC-06:00",
                  "value": "Ecuador - Pacific/Galapagos"
            },
            {
                  "key": "EG_UTC+02:00",
                  "value": "Egypt - Africa/Cairo"
            },
            {
                  "key": "SV_UTC-06:00",
                  "value": "El Salvador - America/El_Salvador"
            },
            {
                  "key": "GQ_UTC+01:00",
                  "value": "Equatorial Guinea - Africa/Malabo"
            },
            {
                  "key": "ER_UTC+03:00",
                  "value": "Eritrea - Africa/Asmara"
            },
            {
                  "key": "EE_UTC+02:00",
                  "value": "Estonia - Europe/Tallinn"
            },
            {
                  "key": "ET_UTC+03:00",
                  "value": "Ethiopia - Africa/Addis_Ababa"
            },
            {
                  "key": "FK_UTC-03:00",
                  "value": "Falkland Islands - Atlantic/Stanley"
            },
            {
                  "key": "FO_UTC+00:00",
                  "value": "Faroe Islands - Atlantic/Faroe"
            },
            {
                  "key": "FJ_UTC+12:00",
                  "value": "Fiji - Pacific/Fiji"
            },
            {
                  "key": "FI_UTC+02:00",
                  "value": "Finland - Europe/Helsinki"
            },
            {
                  "key": "FR_UTC+01:00",
                  "value": "France - Europe/Paris"
            },
            {
                  "key": "GF_UTC-03:00",
                  "value": "French Guiana - America/Cayenne"
            },
            {
                  "key": "PF_UTC-09:00",
                  "value": "French Polynesia - Pacific/Gambier"
            },
            {
                  "key": "PF_UTC-09:30",
                  "value": "French Polynesia - Pacific/Marquesas"
            },
            {
                  "key": "PF_UTC-10:00",
                  "value": "French Polynesia - Pacific/Tahiti"
            },
            {
                  "key": "TF_UTC+05:00",
                  "value": "French Southern Territories - Indian/Kerguelen"
            },
            {
                  "key": "GA_UTC+01:00",
                  "value": "Gabon - Africa/Libreville"
            },
            {
                  "key": "GM_UTC+00:00",
                  "value": "Gambia - Africa/Banjul"
            },
            {
                  "key": "GE_UTC+04:00",
                  "value": "Georgia - Asia/Tbilisi"
            },
            {
                  "key": "DE_UTC+01:00",
                  "value": "Germany - Europe/Berlin"
            },
            {
                  "key": "DE_UTC+01:00",
                  "value": "Germany - Europe/Busingen"
            },
            {
                  "key": "GH_UTC+00:00",
                  "value": "Ghana - Africa/Accra"
            },
            {
                  "key": "GI_UTC+01:00",
                  "value": "Gibraltar - Europe/Gibraltar"
            },
            {
                  "key": "GR_UTC+02:00",
                  "value": "Greece - Europe/Athens"
            },
            {
                  "key": "GL_UTC+00:00",
                  "value": "Greenland - America/Danmarkshavn"
            },
            {
                  "key": "GL_UTC-03:00",
                  "value": "Greenland - America/Godthab"
            },
            {
                  "key": "GL_UTC-01:00",
                  "value": "Greenland - America/Scoresbysund"
            },
            {
                  "key": "GL_UTC-04:00",
                  "value": "Greenland - America/Thule"
            },
            {
                  "key": "GD_UTC-04:00",
                  "value": "Grenada - America/Grenada"
            },
            {
                  "key": "GP_UTC-04:00",
                  "value": "Guadeloupe - America/Guadeloupe"
            },
            {
                  "key": "GU_UTC+10:00",
                  "value": "Guam - Pacific/Guam"
            },
            {
                  "key": "GT_UTC-06:00",
                  "value": "Guatemala - America/Guatemala"
            },
            {
                  "key": "GG_UTC+00:00",
                  "value": "Guernsey - Europe/Guernsey"
            },
            {
                  "key": "GN_UTC+00:00",
                  "value": "Guinea - Africa/Conakry"
            },
            {
                  "key": "GW_UTC+00:00",
                  "value": "Guinea-Bissau - Africa/Bissau"
            },
            {
                  "key": "GY_UTC-04:00",
                  "value": "Guyana - America/Guyana"
            },
            {
                  "key": "HT_UTC-05:00",
                  "value": "Haiti - America/Port-au-Prince"
            },
            {
                  "key": "HN_UTC-06:00",
                  "value": "Honduras - America/Tegucigalpa"
            },
            {
                  "key": "HK_UTC+08:00",
                  "value": "Hong Kong - Asia/Hong_Kong"
            },
            {
                  "key": "HU_UTC+01:00",
                  "value": "Hungary - Europe/Budapest"
            },
            {
                  "key": "IS_UTC+00:00",
                  "value": "Iceland - Atlantic/Reykjavik"
            },
            {
                  "key": "IN_UTC+05:30",
                  "value": "India - Asia/Calcutta"
            },
            {
                  "key": "ID_UTC+07:00",
                  "value": "Indonesia - Asia/Jakarta"
            },
            {
                  "key": "ID_UTC+09:00",
                  "value": "Indonesia - Asia/Jayapura"
            },
            {
                  "key": "ID_UTC+08:00",
                  "value": "Indonesia - Asia/Makassar"
            },
            {
                  "key": "ID_UTC+07:00",
                  "value": "Indonesia - Asia/Pontianak"
            },
            {
                  "key": "IR_UTC+03:30",
                  "value": "Iran - Asia/Tehran"
            },
            {
                  "key": "IQ_UTC+03:00",
                  "value": "Iraq - Asia/Baghdad"
            },
            {
                  "key": "IE_UTC+00:00",
                  "value": "Ireland - Europe/Dublin"
            },
            {
                  "key": "IM_UTC+00:00",
                  "value": "Isle of Man - Europe/Isle_of_Man"
            },
            {
                  "key": "IL_UTC+02:00",
                  "value": "Israel - Asia/Jerusalem"
            },
            {
                  "key": "IT_UTC+01:00",
                  "value": "Italy - Europe/Rome"
            },
            {
                  "key": "CI_UTC+00:00",
                  "value": "Ivory Coast - Africa/Abidjan"
            },
            {
                  "key": "JM_UTC-05:00",
                  "value": "Jamaica - America/Jamaica"
            },
            {
                  "key": "JP_UTC+09:00",
                  "value": "Japan - Asia/Tokyo"
            },
            {
                  "key": "JE_UTC+00:00",
                  "value": "Jersey - Europe/Jersey"
            },
            {
                  "key": "JO_UTC+02:00",
                  "value": "Jordan - Asia/Amman"
            },
            {
                  "key": "KZ_UTC+06:00",
                  "value": "Kazakhstan - Asia/Almaty"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Aqtau"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Aqtobe"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Atyrau"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Oral"
            },
            {
                  "key": "KZ_UTC+06:00",
                  "value": "Kazakhstan - Asia/Qostanay"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Qyzylorda"
            },
            {
                  "key": "KE_UTC+03:00",
                  "value": "Kenya - Africa/Nairobi"
            },
            {
                  "key": "KI_UTC+13:00",
                  "value": "Kiribati - Pacific/Enderbury"
            },
            {
                  "key": "KI_UTC+14:00",
                  "value": "Kiribati - Pacific/Kiritimati"
            },
            {
                  "key": "KI_UTC+12:00",
                  "value": "Kiribati - Pacific/Tarawa"
            },
            {
                  "key": "KW_UTC+03:00",
                  "value": "Kuwait - Asia/Kuwait"
            },
            {
                  "key": "KG_UTC+06:00",
                  "value": "Kyrgyzstan - Asia/Bishkek"
            },
            {
                  "key": "LA_UTC+07:00",
                  "value": "Laos - Asia/Vientiane"
            },
            {
                  "key": "LV_UTC+02:00",
                  "value": "Latvia - Europe/Riga"
            },
            {
                  "key": "LB_UTC+02:00",
                  "value": "Lebanon - Asia/Beirut"
            },
            {
                  "key": "LS_UTC+02:00",
                  "value": "Lesotho - Africa/Maseru"
            },
            {
                  "key": "LR_UTC+00:00",
                  "value": "Liberia - Africa/Monrovia"
            },
            {
                  "key": "LY_UTC+02:00",
                  "value": "Libya - Africa/Tripoli"
            },
            {
                  "key": "LI_UTC+01:00",
                  "value": "Liechtenstein - Europe/Vaduz"
            },
            {
                  "key": "LT_UTC+02:00",
                  "value": "Lithuania - Europe/Vilnius"
            },
            {
                  "key": "LU_UTC+01:00",
                  "value": "Luxembourg - Europe/Luxembourg"
            },
            {
                  "key": "MO_UTC+08:00",
                  "value": "Macao - Asia/Macau"
            },
            {
                  "key": "MK_UTC+01:00",
                  "value": "Macedonia - Europe/Skopje"
            },
            {
                  "key": "MG_UTC+03:00",
                  "value": "Madagascar - Indian/Antananarivo"
            },
            {
                  "key": "MW_UTC+02:00",
                  "value": "Malawi - Africa/Blantyre"
            },
            {
                  "key": "MY_UTC+08:00",
                  "value": "Malaysia - Asia/Kuala_Lumpur"
            },
            {
                  "key": "MY_UTC+08:00",
                  "value": "Malaysia - Asia/Kuching"
            },
            {
                  "key": "MV_UTC+05:00",
                  "value": "Maldives - Indian/Maldives"
            },
            {
                  "key": "ML_UTC+00:00",
                  "value": "Mali - Africa/Bamako"
            },
            {
                  "key": "MT_UTC+01:00",
                  "value": "Malta - Europe/Malta"
            },
            {
                  "key": "MH_UTC+12:00",
                  "value": "Marshall Islands - Pacific/Kwajalein"
            },
            {
                  "key": "MH_UTC+12:00",
                  "value": "Marshall Islands - Pacific/Majuro"
            },
            {
                  "key": "MQ_UTC-04:00",
                  "value": "Martinique - America/Martinique"
            },
            {
                  "key": "MR_UTC+00:00",
                  "value": "Mauritania - Africa/Nouakchott"
            },
            {
                  "key": "MU_UTC+04:00",
                  "value": "Mauritius - Indian/Mauritius"
            },
            {
                  "key": "YT_UTC+03:00",
                  "value": "Mayotte - Indian/Mayotte"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Bahia_Banderas"
            },
            {
                  "key": "MX_UTC-05:00",
                  "value": "Mexico - America/Cancun"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Chihuahua"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Hermosillo"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Matamoros"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Mazatlan"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Merida"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Mexico_City"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Monterrey"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Ojinaga"
            },
            {
                  "key": "MX_UTC-08:00",
                  "value": "Mexico - America/Tijuana"
            },
            {
                  "key": "FM_UTC+10:00",
                  "value": "Micronesia - Pacific/Chuuk"
            },
            {
                  "key": "FM_UTC+11:00",
                  "value": "Micronesia - Pacific/Kosrae"
            },
            {
                  "key": "FM_UTC+11:00",
                  "value": "Micronesia - Pacific/Pohnpei"
            },
            {
                  "key": "MD_UTC+02:00",
                  "value": "Moldova - Europe/Chisinau"
            },
            {
                  "key": "MC_UTC+01:00",
                  "value": "Monaco - Europe/Monaco"
            },
            {
                  "key": "MN_UTC+08:00",
                  "value": "Mongolia - Asia/Choibalsan"
            },
            {
                  "key": "MN_UTC+07:00",
                  "value": "Mongolia - Asia/Hovd"
            },
            {
                  "key": "MN_UTC+08:00",
                  "value": "Mongolia - Asia/Ulaanbaatar"
            },
            {
                  "key": "ME_UTC+01:00",
                  "value": "Montenegro - Europe/Podgorica"
            },
            {
                  "key": "MS_UTC-04:00",
                  "value": "Montserrat - America/Montserrat"
            },
            {
                  "key": "MA_UTC+01:00",
                  "value": "Morocco - Africa/Casablanca"
            },
            {
                  "key": "MZ_UTC+02:00",
                  "value": "Mozambique - Africa/Maputo"
            },
            {
                  "key": "MM_UTC+06:30",
                  "value": "Myanmar - Asia/Yangon"
            },
            {
                  "key": "NA_UTC+02:00",
                  "value": "Namibia - Africa/Windhoek"
            },
            {
                  "key": "NR_UTC+12:00",
                  "value": "Nauru - Pacific/Nauru"
            },
            {
                  "key": "NP_UTC+05:45",
                  "value": "Nepal - Asia/Kathmandu"
            },
            {
                  "key": "NL_UTC+01:00",
                  "value": "Netherlands - Europe/Amsterdam"
            },
            {
                  "key": "NC_UTC+11:00",
                  "value": "New Caledonia - Pacific/Noumea"
            },
            {
                  "key": "NZ_UTC+13:00",
                  "value": "New Zealand - Pacific/Auckland"
            },
            {
                  "key": "NZ_UTC+13:45",
                  "value": "New Zealand - Pacific/Chatham"
            },
            {
                  "key": "NI_UTC-06:00",
                  "value": "Nicaragua - America/Managua"
            },
            {
                  "key": "NE_UTC+01:00",
                  "value": "Niger - Africa/Niamey"
            },
            {
                  "key": "NG_UTC+01:00",
                  "value": "Nigeria - Africa/Lagos"
            },
            {
                  "key": "NU_UTC-11:00",
                  "value": "Niue - Pacific/Niue"
            },
            {
                  "key": "NF_UTC+11:00",
                  "value": "Norfolk Island - Pacific/Norfolk"
            },
            {
                  "key": "KP_UTC+09:00",
                  "value": "North Korea - Asia/Pyongyang"
            },
            {
                  "key": "MP_UTC+10:00",
                  "value": "Northern Mariana Islands - Pacific/Saipan"
            },
            {
                  "key": "NO_UTC+01:00",
                  "value": "Norway - Europe/Oslo"
            },
            {
                  "key": "OM_UTC+04:00",
                  "value": "Oman - Asia/Muscat"
            },
            {
                  "key": "PK_UTC+05:00",
                  "value": "Pakistan - Asia/Karachi"
            },
            {
                  "key": "PW_UTC+09:00",
                  "value": "Palau - Pacific/Palau"
            },
            {
                  "key": "PS_UTC+02:00",
                  "value": "Palestinian Territory - Asia/Gaza"
            },
            {
                  "key": "PS_UTC+02:00",
                  "value": "Palestinian Territory - Asia/Hebron"
            },
            {
                  "key": "PA_UTC-05:00",
                  "value": "Panama - America/Panama"
            },
            {
                  "key": "PG_UTC+11:00",
                  "value": "Papua New Guinea - Pacific/Bougainville"
            },
            {
                  "key": "PG_UTC+10:00",
                  "value": "Papua New Guinea - Pacific/Port_Moresby"
            },
            {
                  "key": "PY_UTC-03:00",
                  "value": "Paraguay - America/Asuncion"
            },
            {
                  "key": "PE_UTC-05:00",
                  "value": "Peru - America/Lima"
            },
            {
                  "key": "PH_UTC+08:00",
                  "value": "Philippines - Asia/Manila"
            },
            {
                  "key": "PN_UTC-08:00",
                  "value": "Pitcairn - Pacific/Pitcairn"
            },
            {
                  "key": "PL_UTC+01:00",
                  "value": "Poland - Europe/Warsaw"
            },
            {
                  "key": "PT_UTC-01:00",
                  "value": "Portugal - Atlantic/Azores"
            },
            {
                  "key": "PT_UTC+00:00",
                  "value": "Portugal - Atlantic/Madeira"
            },
            {
                  "key": "PT_UTC+00:00",
                  "value": "Portugal - Europe/Lisbon"
            },
            {
                  "key": "PR_UTC-04:00",
                  "value": "Puerto Rico - America/Puerto_Rico"
            },
            {
                  "key": "QA_UTC+03:00",
                  "value": "Qatar - Asia/Qatar"
            },
            {
                  "key": "CG_UTC+01:00",
                  "value": "Republic of the Congo - Africa/Brazzaville"
            },
            {
                  "key": "RE_UTC+04:00",
                  "value": "Reunion - Indian/Reunion"
            },
            {
                  "key": "RO_UTC+02:00",
                  "value": "Romania - Europe/Bucharest"
            },
            {
                  "key": "RU_UTC+12:00",
                  "value": "Russia - Asia/Anadyr"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Barnaul"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Chita"
            },
            {
                  "key": "RU_UTC+08:00",
                  "value": "Russia - Asia/Irkutsk"
            },
            {
                  "key": "RU_UTC+12:00",
                  "value": "Russia - Asia/Kamchatka"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Khandyga"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Krasnoyarsk"
            },
            {
                  "key": "RU_UTC+11:00",
                  "value": "Russia - Asia/Magadan"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Novokuznetsk"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Novosibirsk"
            },
            {
                  "key": "RU_UTC+06:00",
                  "value": "Russia - Asia/Omsk</option>"
            },
            {
                  "key": "RU_UTC+11:00",
                  "value": "Russia - Asia/Srednekolymsk"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Tomsk"
            },
            {
                  "key": "RU_UTC+10:00",
                  "value": "Russia - Asia/Ust-Nera"
            },
            {
                  "key": "RU_UTC+10:00",
                  "value": "Russia - Asia/Vladivostok"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Yakutsk"
            },
            {
                  "key": "RU_UTC+05:00",
                  "value": "Russia - Asia/Yekaterinburg"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Astrakhan"
            },
            {
                  "key": "RU_UTC+02:00",
                  "value": "Russia - Europe/Kaliningrad"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Kirov"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Moscow"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Samara"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Saratov"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Simferopol"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Ulyanovsk"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Volgograd"
            },
            {
                  "key": "RW_UTC+02:00",
                  "value": "Rwanda - Africa/Kigali"
            },
            {
                  "key": "BL_UTC-04:00",
                  "value": "Saint Barthélemy - America/St_Barthelemy"
            },
            {
                  "key": "SH_UTC+00:00",
                  "value": "Saint Helena - Atlantic/St_Helena"
            },
            {
                  "key": "KN_UTC-04:00",
                  "value": "Saint Kitts and Nevis - America/St_Kitts"
            },
            {
                  "key": "LC_UTC-04:00",
                  "value": "Saint Lucia - America/St_Lucia"
            },
            {
                  "key": "MF_UTC-04:00",
                  "value": "Saint Martin - America/Marigot"
            },
            {
                  "key": "PM_UTC-03:00",
                  "value": "Saint Pierre and Miquelon - America/Miquelon"
            },
            {
                  "key": "VC_UTC-04:00",
                  "value": "Saint Vincent and the Grenadines - America/St_Vincent"
            },
            {
                  "key": "WS_UTC+14:00",
                  "value": "Samoa - Pacific/Apia"
            },
            {
                  "key": "SM_UTC+01:00",
                  "value": "San Marino - Europe/San_Marino"
            },
            {
                  "key": "ST_UTC+00:00",
                  "value": "Sao Tome and Principe - Africa/Sao_Tome"
            },
            {
                  "key": "SA_UTC+03:00",
                  "value": "Saudi Arabia - Asia/Riyadh"
            },
            {
                  "key": "SN_UTC+00:00",
                  "value": "Senegal - Africa/Dakar"
            },
            {
                  "key": "RS_UTC+01:00",
                  "value": "Serbia - Europe/Belgrade"
            },
            {
                  "key": "SC_UTC+04:00",
                  "value": "Seychelles - Indian/Mahe"
            },
            {
                  "key": "SL_UTC+00:00",
                  "value": "Sierra Leone - Africa/Freetown"
            },
            {
                  "key": "SG_UTC+08:00",
                  "value": "Singapore - Asia/Singapore"
            },
            {
                  "key": "SX_UTC-04:00",
                  "value": "Sint Maarten - America/Lower_Princes"
            },
            {
                  "key": "SK_UTC+01:00",
                  "value": "Slovakia - Europe/Bratislava"
            },
            {
                  "key": "SI_UTC+01:00",
                  "value": "Slovenia - Europe/Ljubljana"
            },
            {
                  "key": "SB_UTC+11:00",
                  "value": "Solomon Islands - Pacific/Guadalcanal"
            },
            {
                  "key": "SO_UTC+03:00",
                  "value": "Somalia - Africa/Mogadishu"
            },
            {
                  "key": "ZA_UTC+02:00",
                  "value": "South Africa - Africa/Johannesburg"
            },
            {
                  "key": "GS_UTC-02:00",
                  "value": "South Georgia and the South Sandwich Islands - Atlantic/South_Georgia"
            },
            {
                  "key": "KR_UTC+09:00",
                  "value": "South Korea - Asia/Seoul"
            },
            {
                  "key": "SS_UTC+03:00",
                  "value": "South Sudan - Africa/Juba"
            },
            {
                  "key": "ES_UTC+01:00",
                  "value": "Spain - Africa/Ceuta"
            },
            {
                  "key": "ES_UTC+00:00",
                  "value": "Spain - Atlantic/Canary"
            },
            {
                  "key": "ES_UTC+01:00",
                  "value": "Spain - Europe/Madrid"
            },
            {
                  "key": "LK_UTC+05:30",
                  "value": "Sri Lanka - Asia/Colombo"
            },
            {
                  "key": "SD_UTC+02:00",
                  "value": "Sudan - Africa/Khartoum"
            },
            {
                  "key": "SR_UTC-03:00",
                  "value": "Suriname - America/Paramaribo"
            },
            {
                  "key": "SJ_UTC+01:00",
                  "value": "Svalbard and Jan Mayen - Arctic/Longyearbyen"
            },
            {
                  "key": "SZ_UTC+02:00",
                  "value": "Swaziland - Africa/Mbabane"
            },
            {
                  "key": "SE_UTC+01:00",
                  "value": "Sweden - Europe/Stockholm"
            },
            {
                  "key": "CH_UTC+01:00",
                  "value": "Switzerland - Europe/Zurich"
            },
            {
                  "key": "SY_UTC+02:00",
                  "value": "Syria - Asia/Damascus"
            },
            {
                  "key": "TW_UTC+08:00",
                  "value": "Taiwan - Asia/Taipei"
            },
            {
                  "key": "TJ_UTC+05:00",
                  "value": "Tajikistan - Asia/Dushanbe"
            },
            {
                  "key": "TZ_UTC+03:00",
                  "value": "Tanzania - Africa/Dar_es_Salaam"
            },
            {
                  "key": "TH_UTC+07:00",
                  "value": "Thailand - Asia/Bangkok"
            },
            {
                  "key": "TG_UTC+00:00",
                  "value": "Togo - Africa/Lome"
            },
            {
                  "key": "TK_UTC+13:00",
                  "value": "Tokelau - Pacific/Fakaofo"
            },
            {
                  "key": "TO_UTC+13:00",
                  "value": "Tonga - Pacific/Tongatapu"
            },
            {
                  "key": "TT_UTC-04:00",
                  "value": "Trinidad and Tobago - America/Port_of_Spain"
            },
            {
                  "key": "TN_UTC+01:00",
                  "value": "Tunisia - Africa/Tunis"
            },
            {
                  "key": "TR_UTC+03:00",
                  "value": "Turkey - Europe/Istanbul"
            },
            {
                  "key": "TM_UTC+05:00",
                  "value": "Turkmenistan - Asia/Ashgabat"
            },
            {
                  "key": "TC_UTC-05:00",
                  "value": "Turks and Caicos Islands - America/Grand_Turk"
            },
            {
                  "key": "TV_UTC+12:00",
                  "value": "Tuvalu - Pacific/Funafuti"
            },
            {
                  "key": "VI_UTC-04:00",
                  "value": "U.S. Virgin Islands - America/St_Thomas"
            },
            {
                  "key": "UG_UTC+03:00",
                  "value": "Uganda - Africa/Kampala"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Kiev"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Uzhgorod"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Zaporozhye"
            },
            {
                  "key": "AE_UTC+04:00",
                  "value": "United Arab Emirates - Asia/Dubai"
            },
            {
                  "key": "GB_UTC+00:00",
                  "value": "United Kingdom - Europe/London"
            },
            {
                  "key": "US_UTC-10:00",
                  "value": "United States - America/Adak"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Anchorage"
            },
            {
                  "key": "US_UTC-07:00",
                  "value": "United States - America/Boise"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Chicago"
            },
            {
                  "key": "US_UTC-07:00",
                  "value": "United States - America/Denver"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Detroit"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Indianapolis"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Indiana/Knox"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Marengo"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Petersburg"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Indiana/Tell_City"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Vevay"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Vincennes"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Winamac"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Juneau"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Kentucky/Louisville"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Kentucky/Monticello"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Los_Angeles"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Menominee"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Metlakatla"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/New_York"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Nome"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/North_Dakota/Beulah"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/North_Dakota/Center"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/North_Dakota/New_Salem"
            },
            {
                  "key": "US_UTC-07:00",
                  "value": "United States - America/Phoenix"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Sitka"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Yakutat"
            },
            {
                  "key": "US_UTC-10:00",
                  "value": "United States - Pacific/Honolulu"
            },
            {
                  "key": "UM_UTC-11:00",
                  "value": "United States Minor Outlying Islands - Pacific/Midway"
            },
            {
                  "key": "UM_UTC+12:00",
                  "value": "United States Minor Outlying Islands - Pacific/Wake"
            },
            {
                  "key": "UY_UTC-03:00",
                  "value": "Uruguay - America/Montevideo"
            },
            {
                  "key": "UZ_UTC+05:00",
                  "value": "Uzbekistan - Asia/Samarkand"
            },
            {
                  "key": "UZ_UTC+05:00",
                  "value": "Uzbekistan - Asia/Tashkent"
            },
            {
                  "key": "VU_UTC+11:00",
                  "value": "Vanuatu - Pacific/Efate"
            },
            {
                  "key": "VA_UTC+01:00",
                  "value": "Vatican - Europe/Vatican"
            },
            {
                  "key": "VE_UTC-04:00",
                  "value": "Venezuela - America/Caracas"
            },
            {
                  "key": "VN_UTC+07:00",
                  "value": "Vietnam - Asia/Ho_Chi_Minh"
            },
            {
                  "key": "WF_UTC+12:00",
                  "value": "Wallis and Futuna - Pacific/Wallis"
            },
            {
                  "key": "EH_UTC+01:00",
                  "value": "Western Sahara - Africa/El_Aaiun"
            },
            {
                  "key": "YE_UTC+03:00",
                  "value": "Yemen - Asia/Aden"
            },
            {
                  "key": "ZM_UTC+02:00",
                  "value": "Zambia - Africa/Lusaka"
            },
            {
                  "key": "ZW_UTC+02:00",
                  "value": "Zimbabwe - Africa/Harare"
            }
      ],
      dst_timezones_list: [{
                  "key": "AF_UTC+04:30",
                  "value": "Afghanistan - Asia/Kabul"
            },
            {
                  "key": "AX_UTC+02:00",
                  "value": "Aland Islands - Europe/Mariehamn"
            },
            {
                  "key": "AL_UTC+01:00",
                  "value": "Albania - Europe/Tirane"
            },
            {
                  "key": "DZ_UTC+01:00",
                  "value": "Algeria - Africa/Algiers"
            },
            {
                  "key": "AS_UTC-11:00",
                  "value": "American Samoa - Pacific/Pago_Pago"
            },
            {
                  "key": "AD_UTC+01:00",
                  "value": "Andorra - Europe/Andorra"
            },
            {
                  "key": "AO_UTC+01:00",
                  "value": "Angola - Africa/Luanda"
            },
            {
                  "key": "AI_UTC-04:00",
                  "value": "Anguilla - America/Anguilla"
            },
            {
                  "key": "AQ_UTC+08:00",
                  "value": "Antarctica - Antarctica/Casey"
            },
            {
                  "key": "AQ_UTC+07:00",
                  "value": "Antarctica - Antarctica/Davis"
            },
            {
                  "key": "AQ_UTC+10:00",
                  "value": "Antarctica - Antarctica/DumontDUrville"
            },
            {
                  "key": "AQ_UTC+05:00",
                  "value": "Antarctica - Antarctica/Mawson"
            },
            {
                  "key": "AQ_UTC+13:00",
                  "value": "Antarctica - Antarctica/McMurdo"
            },
            {
                  "key": "AQ_UTC-03:00",
                  "value": "Antarctica - Antarctica/Palmer"
            },
            {
                  "key": "AQ_UTC-03:00",
                  "value": "Antarctica - Antarctica/Rothera"
            },
            {
                  "key": "AQ_UTC+03:00",
                  "value": "Antarctica - Antarctica/Syowa"
            },
            {
                  "key": "AQ_UTC+00:00",
                  "value": "Antarctica - Antarctica/Troll"
            },
            {
                  "key": "AQ_UTC+06:00",
                  "value": "Antarctica - Antarctica/Vostok"
            },
            {
                  "key": "AG_UTC-04:00",
                  "value": "Antigua and Barbuda - America/Antigua"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Buenos_Aires"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Catamarca"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Cordoba"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Jujuy"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/La_Rioja"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Mendoza"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Rio_Gallegos"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Salta"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/San_Juan"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/San_Luis"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Tucuman"
            },
            {
                  "key": "AR_UTC-03:00",
                  "value": "Argentina - America/Argentina/Ushuaia"
            },
            {
                  "key": "AM_UTC+04:00",
                  "value": "Armenia - Asia/Yerevan"
            },
            {
                  "key": "AW_UTC-04:00",
                  "value": "Aruba - America/Aruba"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Antarctica/Macquarie"
            },
            {
                  "key": "AU_UTC+10:30",
                  "value": "Australia - Australia/Adelaide"
            },
            {
                  "key": "AU_UTC+10:00",
                  "value": "Australia - Australia/Brisbane"
            },
            {
                  "key": "AU_UTC+10:30",
                  "value": "Australia - Australia/Broken_Hill"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Currie"
            },
            {
                  "key": "AU_UTC+09:30",
                  "value": "Australia - Australia/Darwin"
            },
            {
                  "key": "AU_UTC+08:45",
                  "value": "Australia - Australia/Eucla"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Hobart"
            },
            {
                  "key": "AU_UTC+10:00",
                  "value": "Australia - Australia/Lindeman"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Lord_Howe"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Melbourne"
            },
            {
                  "key": "AU_UTC+08:00",
                  "value": "Australia - Australia/Perth"
            },
            {
                  "key": "AU_UTC+11:00",
                  "value": "Australia - Australia/Sydney"
            },
            {
                  "key": "AT_UTC+01:00",
                  "value": "Austria - Europe/Vienna"
            },
            {
                  "key": "AZ_UTC+04:00",
                  "value": "Azerbaijan - Asia/Baku"
            },
            {
                  "key": "BS_UTC-05:00",
                  "value": "Bahamas - America/Nassau"
            },
            {
                  "key": "BH_UTC+03:00",
                  "value": "Bahrain - Asia/Bahrain"
            },
            {
                  "key": "BD_UTC+06:00",
                  "value": "Bangladesh - Asia/Dhaka"
            },
            {
                  "key": "BB_UTC-04:00",
                  "value": "Barbados - America/Barbados"
            },
            {
                  "key": "BY_UTC+03:00",
                  "value": "Belarus - Europe/Minsk"
            },
            {
                  "key": "BE_UTC+01:00",
                  "value": "Belgium - Europe/Brussels"
            },
            {
                  "key": "BZ_UTC-06:00",
                  "value": "Belize - America/Belize"
            },
            {
                  "key": "BJ_UTC+01:00",
                  "value": "Benin - Africa/Porto-Novo"
            },
            {
                  "key": "BM_UTC-04:00",
                  "value": "Bermuda - Atlantic/Bermuda"
            },
            {
                  "key": "BT_UTC+06:00",
                  "value": "Bhutan - Asia/Thimphu"
            },
            {
                  "key": "BO_UTC-04:00",
                  "value": "Bolivia - America/La_Paz"
            },
            {
                  "key": "BQ_UTC-04:00",
                  "value": "Bonaire, Saint Eustatius and Saba - America/Kralendijk"
            },
            {
                  "key": "BA_UTC+01:00",
                  "value": "Bosnia and Herzegovina - Europe/Sarajevo"
            },
            {
                  "key": "BW_UTC+02:00",
                  "value": "Botswana - Africa/Gaborone"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Araguaina"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Bahia"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Belem"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Boa_Vista"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Campo_Grande"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Cuiaba"
            },
            {
                  "key": "BR_UTC-05:00",
                  "value": "Brazil - America/Eirunepe"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Fortaleza"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Maceio"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Manaus"
            },
            {
                  "key": "BR_UTC-02:00",
                  "value": "Brazil - America/Noronha"
            },
            {
                  "key": "BR_UTC-04:00",
                  "value": "Brazil - America/Porto_Velho"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Recife"
            },
            {
                  "key": "BR_UTC-05:00",
                  "value": "Brazil - America/Rio_Branco"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Santarem"
            },
            {
                  "key": "BR_UTC-03:00",
                  "value": "Brazil - America/Sao_Paulo"
            },
            {
                  "key": "IO_UTC+06:00",
                  "value": "British Indian Ocean Territory - Indian/Chagos"
            },
            {
                  "key": "VG_UTC-04:00",
                  "value": "British Virgin Islands - America/Tortola"
            },
            {
                  "key": "BN_UTC+08:00",
                  "value": "Brunei - Asia/Brunei"
            },
            {
                  "key": "BG_UTC+02:00",
                  "value": "Bulgaria - Europe/Sofia"
            },
            {
                  "key": "BF_UTC+00:00",
                  "value": "Burkina Faso - Africa/Ouagadougou"
            },
            {
                  "key": "BI_UTC+02:00",
                  "value": "Burundi - Africa/Bujumbura"
            },
            {
                  "key": "KH_UTC+07:00",
                  "value": "Cambodia - Asia/Phnom_Penh"
            },
            {
                  "key": "CM_UTC+01:00",
                  "value": "Cameroon - Africa/Douala"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Atikokan"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Blanc-Sablon"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Cambridge_Bay"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Creston"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Dawson"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Dawson_Creek"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Edmonton"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Fort_Nelson"
            },
            {
                  "key": "CA_UTC-03:00",
                  "value": "Canada - America/Glace_Bay"
            },
            {
                  "key": "CA_UTC-03:00",
                  "value": "Canada - America/Goose_Bay"
            },
            {
                  "key": "CA_UTC-03:00",
                  "value": "Canada - America/Halifax"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Inuvik"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Iqaluit"
            },
            {
                  "key": "CA_UTC-03:00",
                  "value": "Canada - America/Moncton"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Nipigon"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Pangnirtung"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Rainy_River"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Rankin_Inlet"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Regina"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Resolute"
            },
            {
                  "key": "CA_UTC-02:30",
                  "value": "Canada - America/St_Johns"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Swift_Current"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Thunder_Bay"
            },
            {
                  "key": "CA_UTC-04:00",
                  "value": "Canada - America/Toronto"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Vancouver"
            },
            {
                  "key": "CA_UTC-07:00",
                  "value": "Canada - America/Whitehorse"
            },
            {
                  "key": "CA_UTC-05:00",
                  "value": "Canada - America/Winnipeg"
            },
            {
                  "key": "CA_UTC-06:00",
                  "value": "Canada - America/Yellowknife"
            },
            {
                  "key": "CV_UTC-01:00",
                  "value": "Cape Verde - Atlantic/Cape_Verde"
            },
            {
                  "key": "KY_UTC-05:00",
                  "value": "Cayman Islands - America/Cayman"
            },
            {
                  "key": "CF_UTC+01:00",
                  "value": "Central African Republic - Africa/Bangui"
            },
            {
                  "key": "TD_UTC+01:00",
                  "value": "Chad - Africa/Ndjamena"
            },
            {
                  "key": "CL_UTC-03:00",
                  "value": "Chile - America/Punta_Arenas"
            },
            {
                  "key": "CL_UTC-03:00",
                  "value": "Chile - America/Santiago"
            },
            {
                  "key": "CL_UTC-05:00",
                  "value": "Chile - Pacific/Easter"
            },
            {
                  "key": "CN_UTC+08:00",
                  "value": "China - Asia/Shanghai"
            },
            {
                  "key": "CN_UTC+06:00",
                  "value": "China - Asia/Urumqi"
            },
            {
                  "key": "CX_UTC+07:00",
                  "value": "Christmas Island - Indian/Christmas"
            },
            {
                  "key": "CC_UTC+06:30",
                  "value": "Cocos Islands - Indian/Cocos"
            },
            {
                  "key": "CO_UTC-05:00",
                  "value": "Colombia - America/Bogota"
            },
            {
                  "key": "KM_UTC+03:00",
                  "value": "Comoros - Indian/Comoro"
            },
            {
                  "key": "CK_UTC-10:00",
                  "value": "Cook Islands - Pacific/Rarotonga"
            },
            {
                  "key": "CR_UTC-06:00",
                  "value": "Costa Rica - America/Costa_Rica"
            },
            {
                  "key": "HR_UTC+01:00",
                  "value": "Croatia - Europe/Zagreb"
            },
            {
                  "key": "CU_UTC-05:00",
                  "value": "Cuba - America/Havana"
            },
            {
                  "key": "CW_UTC-04:00",
                  "value": "Curaçao - America/Curacao"
            },
            {
                  "key": "CY_UTC+02:00",
                  "value": "Cyprus - Asia/Famagusta"
            },
            {
                  "key": "CY_UTC+02:00",
                  "value": "Cyprus - Asia/Nicosia"
            },
            {
                  "key": "CZ_UTC+01:00",
                  "value": "Czech Republic - Europe/Prague"
            },
            {
                  "key": "CD_UTC+01:00",
                  "value": "Democratic Republic of the Congo - Africa/Kinshasa"
            },
            {
                  "key": "CD_UTC+02:00",
                  "value": "Democratic Republic of the Congo - Africa/Lubumbashi"
            },
            {
                  "key": "DK_UTC+01:00",
                  "value": "Denmark - Europe/Copenhagen"
            },
            {
                  "key": "DJ_UTC+03:00",
                  "value": "Djibouti - Africa/Djibouti"
            },
            {
                  "key": "DM_UTC-04:00",
                  "value": "Dominica - America/Dominica"
            },
            {
                  "key": "DO_UTC-04:00",
                  "value": "Dominican Republic - America/Santo_Domingo"
            },
            {
                  "key": "TL_UTC+09:00",
                  "value": "East Timor - Asia/Dili"
            },
            {
                  "key": "EC_UTC-05:00",
                  "value": "Ecuador - America/Guayaquil"
            },
            {
                  "key": "EC_UTC-06:00",
                  "value": "Ecuador - Pacific/Galapagos"
            },
            {
                  "key": "EG_UTC+02:00",
                  "value": "Egypt - Africa/Cairo"
            },
            {
                  "key": "SV_UTC-06:00",
                  "value": "El Salvador - America/El_Salvador"
            },
            {
                  "key": "GQ_UTC+01:00",
                  "value": "Equatorial Guinea - Africa/Malabo"
            },
            {
                  "key": "ER_UTC+03:00",
                  "value": "Eritrea - Africa/Asmara"
            },
            {
                  "key": "EE_UTC+02:00",
                  "value": "Estonia - Europe/Tallinn"
            },
            {
                  "key": "ET_UTC+03:00",
                  "value": "Ethiopia - Africa/Addis_Ababa"
            },
            {
                  "key": "FK_UTC-03:00",
                  "value": "Falkland Islands - Atlantic/Stanley"
            },
            {
                  "key": "FO_UTC+00:00",
                  "value": "Faroe Islands - Atlantic/Faroe"
            },
            {
                  "key": "FJ_UTC+12:00",
                  "value": "Fiji - Pacific/Fiji"
            },
            {
                  "key": "FI_UTC+02:00",
                  "value": "Finland - Europe/Helsinki"
            },
            {
                  "key": "FR_UTC+01:00",
                  "value": "France - Europe/Paris"
            },
            {
                  "key": "GF_UTC-03:00",
                  "value": "French Guiana - America/Cayenne"
            },
            {
                  "key": "PF_UTC-09:00",
                  "value": "French Polynesia - Pacific/Gambier"
            },
            {
                  "key": "PF_UTC-09:30",
                  "value": "French Polynesia - Pacific/Marquesas"
            },
            {
                  "key": "PF_UTC-10:00",
                  "value": "French Polynesia - Pacific/Tahiti"
            },
            {
                  "key": "TF_UTC+05:00",
                  "value": "French Southern Territories - Indian/Kerguelen"
            },
            {
                  "key": "GA_UTC+01:00",
                  "value": "Gabon - Africa/Libreville"
            },
            {
                  "key": "GM_UTC+00:00",
                  "value": "Gambia - Africa/Banjul"
            },
            {
                  "key": "GE_UTC+04:00",
                  "value": "Georgia - Asia/Tbilisi"
            },
            {
                  "key": "DE_UTC+01:00",
                  "value": "Germany - Europe/Berlin"
            },
            {
                  "key": "DE_UTC+01:00",
                  "value": "Germany - Europe/Busingen"
            },
            {
                  "key": "GH_UTC+00:00",
                  "value": "Ghana - Africa/Accra"
            },
            {
                  "key": "GI_UTC+01:00",
                  "value": "Gibraltar - Europe/Gibraltar"
            },
            {
                  "key": "GR_UTC+02:00",
                  "value": "Greece - Europe/Athens"
            },
            {
                  "key": "GL_UTC+00:00",
                  "value": "Greenland - America/Danmarkshavn"
            },
            {
                  "key": "GL_UTC-03:00",
                  "value": "Greenland - America/Godthab"
            },
            {
                  "key": "GL_UTC-01:00",
                  "value": "Greenland - America/Scoresbysund"
            },
            {
                  "key": "GL_UTC-04:00",
                  "value": "Greenland - America/Thule"
            },
            {
                  "key": "GD_UTC-04:00",
                  "value": "Grenada - America/Grenada"
            },
            {
                  "key": "GP_UTC-04:00",
                  "value": "Guadeloupe - America/Guadeloupe"
            },
            {
                  "key": "GU_UTC+10:00",
                  "value": "Guam - Pacific/Guam"
            },
            {
                  "key": "GT_UTC-06:00",
                  "value": "Guatemala - America/Guatemala"
            },
            {
                  "key": "GG_UTC+00:00",
                  "value": "Guernsey - Europe/Guernsey"
            },
            {
                  "key": "GN_UTC+00:00",
                  "value": "Guinea - Africa/Conakry"
            },
            {
                  "key": "GW_UTC+00:00",
                  "value": "Guinea-Bissau - Africa/Bissau"
            },
            {
                  "key": "GY_UTC-04:00",
                  "value": "Guyana - America/Guyana"
            },
            {
                  "key": "HT_UTC-04:00",
                  "value": "Haiti - America/Port-au-Prince"
            },
            {
                  "key": "HN_UTC-06:00",
                  "value": "Honduras - America/Tegucigalpa"
            },
            {
                  "key": "HK_UTC+08:00",
                  "value": "Hong Kong - Asia/Hong_Kong"
            },
            {
                  "key": "HU_UTC+01:00",
                  "value": "Hungary - Europe/Budapest"
            },
            {
                  "key": "IS_UTC+00:00",
                  "value": "Iceland - Atlantic/Reykjavik"
            },
            {
                  "key": "IN_UTC+05:30",
                  "value": "India - Asia/Calcutta"
            },
            {
                  "key": "ID_UTC+07:00",
                  "value": "Indonesia - Asia/Jakarta"
            },
            {
                  "key": "ID_UTC+09:00",
                  "value": "Indonesia - Asia/Jayapura"
            },
            {
                  "key": "ID_UTC+08:00",
                  "value": "Indonesia - Asia/Makassar"
            },
            {
                  "key": "ID_UTC+07:00",
                  "value": "Indonesia - Asia/Pontianak"
            },
            {
                  "key": "IR_UTC+03:30",
                  "value": "Iran - Asia/Tehran"
            },
            {
                  "key": "IQ_UTC+03:00",
                  "value": "Iraq - Asia/Baghdad"
            },
            {
                  "key": "IE_UTC+00:00",
                  "value": "Ireland - Europe/Dublin"
            },
            {
                  "key": "IM_UTC+00:00",
                  "value": "Isle of Man - Europe/Isle_of_Man"
            },
            {
                  "key": "IL_UTC+02:00",
                  "value": "Israel - Asia/Jerusalem"
            },
            {
                  "key": "IT_UTC+01:00",
                  "value": "Italy - Europe/Rome"
            },
            {
                  "key": "CI_UTC+00:00",
                  "value": "Ivory Coast - Africa/Abidjan"
            },
            {
                  "key": "JM_UTC-05:00",
                  "value": "Jamaica - America/Jamaica"
            },
            {
                  "key": "JP_UTC+09:00",
                  "value": "Japan - Asia/Tokyo"
            },
            {
                  "key": "JE_UTC+00:00",
                  "value": "Jersey - Europe/Jersey"
            },
            {
                  "key": "JO_UTC+02:00",
                  "value": "Jordan - Asia/Amman"
            },
            {
                  "key": "KZ_UTC+06:00",
                  "value": "Kazakhstan - Asia/Almaty"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Aqtau"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Aqtobe"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Atyrau"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Oral"
            },
            {
                  "key": "KZ_UTC+06:00",
                  "value": "Kazakhstan - Asia/Qostanay"
            },
            {
                  "key": "KZ_UTC+05:00",
                  "value": "Kazakhstan - Asia/Qyzylorda"
            },
            {
                  "key": "KE_UTC+03:00",
                  "value": "Kenya - Africa/Nairobi"
            },
            {
                  "key": "KI_UTC+13:00",
                  "value": "Kiribati - Pacific/Enderbury"
            },
            {
                  "key": "KI_UTC+14:00",
                  "value": "Kiribati - Pacific/Kiritimati"
            },
            {
                  "key": "KI_UTC+12:00",
                  "value": "Kiribati - Pacific/Tarawa"
            },
            {
                  "key": "KW_UTC+03:00",
                  "value": "Kuwait - Asia/Kuwait"
            },
            {
                  "key": "KG_UTC+06:00",
                  "value": "Kyrgyzstan - Asia/Bishkek"
            },
            {
                  "key": "LA_UTC+07:00",
                  "value": "Laos - Asia/Vientiane"
            },
            {
                  "key": "LV_UTC+02:00",
                  "value": "Latvia - Europe/Riga"
            },
            {
                  "key": "LB_UTC+02:00",
                  "value": "Lebanon - Asia/Beirut"
            },
            {
                  "key": "LS_UTC+02:00",
                  "value": "Lesotho - Africa/Maseru"
            },
            {
                  "key": "LR_UTC+00:00",
                  "value": "Liberia - Africa/Monrovia"
            },
            {
                  "key": "LY_UTC+02:00",
                  "value": "Libya - Africa/Tripoli"
            },
            {
                  "key": "LI_UTC+01:00",
                  "value": "Liechtenstein - Europe/Vaduz"
            },
            {
                  "key": "LT_UTC+02:00",
                  "value": "Lithuania - Europe/Vilnius"
            },
            {
                  "key": "LU_UTC+01:00",
                  "value": "Luxembourg - Europe/Luxembourg"
            },
            {
                  "key": "MO_UTC+08:00",
                  "value": "Macao - Asia/Macau"
            },
            {
                  "key": "MK_UTC+01:00",
                  "value": "Macedonia - Europe/Skopje"
            },
            {
                  "key": "MG_UTC+03:00",
                  "value": "Madagascar - Indian/Antananarivo"
            },
            {
                  "key": "MW_UTC+02:00",
                  "value": "Malawi - Africa/Blantyre"
            },
            {
                  "key": "MY_UTC+08:00",
                  "value": "Malaysia - Asia/Kuala_Lumpur"
            },
            {
                  "key": "MY_UTC+08:00",
                  "value": "Malaysia - Asia/Kuching"
            },
            {
                  "key": "MV_UTC+05:00",
                  "value": "Maldives - Indian/Maldives"
            },
            {
                  "key": "ML_UTC+00:00",
                  "value": "Mali - Africa/Bamako"
            },
            {
                  "key": "MT_UTC+01:00",
                  "value": "Malta - Europe/Malta"
            },
            {
                  "key": "MH_UTC+12:00",
                  "value": "Marshall Islands - Pacific/Kwajalein"
            },
            {
                  "key": "MH_UTC+12:00",
                  "value": "Marshall Islands - Pacific/Majuro"
            },
            {
                  "key": "MQ_UTC-04:00",
                  "value": "Martinique - America/Martinique"
            },
            {
                  "key": "MR_UTC+00:00",
                  "value": "Mauritania - Africa/Nouakchott"
            },
            {
                  "key": "MU_UTC+04:00",
                  "value": "Mauritius - Indian/Mauritius"
            },
            {
                  "key": "YT_UTC+03:00",
                  "value": "Mayotte - Indian/Mayotte"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Bahia_Banderas"
            },
            {
                  "key": "MX_UTC-05:00",
                  "value": "Mexico - America/Cancun"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Chihuahua"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Hermosillo"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Matamoros"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Mazatlan"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Merida"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Mexico_City"
            },
            {
                  "key": "MX_UTC-06:00",
                  "value": "Mexico - America/Monterrey"
            },
            {
                  "key": "MX_UTC-07:00",
                  "value": "Mexico - America/Ojinaga"
            },
            {
                  "key": "MX_UTC-08:00",
                  "value": "Mexico - America/Tijuana"
            },
            {
                  "key": "FM_UTC+10:00",
                  "value": "Micronesia - Pacific/Chuuk"
            },
            {
                  "key": "FM_UTC+11:00",
                  "value": "Micronesia - Pacific/Kosrae"
            },
            {
                  "key": "FM_UTC+11:00",
                  "value": "Micronesia - Pacific/Pohnpei"
            },
            {
                  "key": "MD_UTC+02:00",
                  "value": "Moldova - Europe/Chisinau"
            },
            {
                  "key": "MC_UTC+01:00",
                  "value": "Monaco - Europe/Monaco"
            },
            {
                  "key": "MN_UTC+08:00",
                  "value": "Mongolia - Asia/Choibalsan"
            },
            {
                  "key": "MN_UTC+07:00",
                  "value": "Mongolia - Asia/Hovd"
            },
            {
                  "key": "MN_UTC+08:00",
                  "value": "Mongolia - Asia/Ulaanbaatar"
            },
            {
                  "key": "ME_UTC+01:00",
                  "value": "Montenegro - Europe/Podgorica"
            },
            {
                  "key": "MS_UTC-04:00",
                  "value": "Montserrat - America/Montserrat"
            },
            {
                  "key": "MA_UTC+01:00",
                  "value": "Morocco - Africa/Casablanca"
            },
            {
                  "key": "MZ_UTC+02:00",
                  "value": "Mozambique - Africa/Maputo"
            },
            {
                  "key": "MM_UTC+06:30",
                  "value": "Myanmar - Asia/Yangon"
            },
            {
                  "key": "NA_UTC+02:00",
                  "value": "Namibia - Africa/Windhoek"
            },
            {
                  "key": "NR_UTC+12:00",
                  "value": "Nauru - Pacific/Nauru"
            },
            {
                  "key": "NP_UTC+05:45",
                  "value": "Nepal - Asia/Kathmandu"
            },
            {
                  "key": "NL_UTC+01:00",
                  "value": "Netherlands - Europe/Amsterdam"
            },
            {
                  "key": "NC_UTC+11:00",
                  "value": "New Caledonia - Pacific/Noumea"
            },
            {
                  "key": "NZ_UTC+13:00",
                  "value": "New Zealand - Pacific/Auckland"
            },
            {
                  "key": "NZ_UTC+13:45",
                  "value": "New Zealand - Pacific/Chatham"
            },
            {
                  "key": "NI_UTC-06:00",
                  "value": "Nicaragua - America/Managua"
            },
            {
                  "key": "NE_UTC+01:00",
                  "value": "Niger - Africa/Niamey"
            },
            {
                  "key": "NG_UTC+01:00",
                  "value": "Nigeria - Africa/Lagos"
            },
            {
                  "key": "NU_UTC-11:00",
                  "value": "Niue - Pacific/Niue"
            },
            {
                  "key": "NF_UTC+11:00",
                  "value": "Norfolk Island - Pacific/Norfolk"
            },
            {
                  "key": "KP_UTC+09:00",
                  "value": "North Korea - Asia/Pyongyang"
            },
            {
                  "key": "MP_UTC+10:00",
                  "value": "Northern Mariana Islands - Pacific/Saipan"
            },
            {
                  "key": "NO_UTC+01:00",
                  "value": "Norway - Europe/Oslo"
            },
            {
                  "key": "OM_UTC+04:00",
                  "value": "Oman - Asia/Muscat"
            },
            {
                  "key": "PK_UTC+05:00",
                  "value": "Pakistan - Asia/Karachi"
            },
            {
                  "key": "PW_UTC+09:00",
                  "value": "Palau - Pacific/Palau"
            },
            {
                  "key": "PS_UTC+02:00",
                  "value": "Palestinian Territory - Asia/Gaza"
            },
            {
                  "key": "PS_UTC+02:00",
                  "value": "Palestinian Territory - Asia/Hebron"
            },
            {
                  "key": "PA_UTC-05:00",
                  "value": "Panama - America/Panama"
            },
            {
                  "key": "PG_UTC+11:00",
                  "value": "Papua New Guinea - Pacific/Bougainville"
            },
            {
                  "key": "PG_UTC+10:00",
                  "value": "Papua New Guinea - Pacific/Port_Moresby"
            },
            {
                  "key": "PY_UTC-03:00",
                  "value": "Paraguay - America/Asuncion"
            },
            {
                  "key": "PE_UTC-05:00",
                  "value": "Peru - America/Lima"
            },
            {
                  "key": "PH_UTC+08:00",
                  "value": "Philippines - Asia/Manila"
            },
            {
                  "key": "PN_UTC-08:00",
                  "value": "Pitcairn - Pacific/Pitcairn"
            },
            {
                  "key": "PL_UTC+01:00",
                  "value": "Poland - Europe/Warsaw"
            },
            {
                  "key": "PT_UTC-01:00",
                  "value": "Portugal - Atlantic/Azores"
            },
            {
                  "key": "PT_UTC+00:00",
                  "value": "Portugal - Atlantic/Madeira"
            },
            {
                  "key": "PT_UTC+00:00",
                  "value": "Portugal - Europe/Lisbon"
            },
            {
                  "key": "PR_UTC-04:00",
                  "value": "Puerto Rico - America/Puerto_Rico"
            },
            {
                  "key": "QA_UTC+03:00",
                  "value": "Qatar - Asia/Qatar"
            },
            {
                  "key": "CG_UTC+01:00",
                  "value": "Republic of the Congo - Africa/Brazzaville"
            },
            {
                  "key": "RE_UTC+04:00",
                  "value": "Reunion - Indian/Reunion"
            },
            {
                  "key": "RO_UTC+02:00",
                  "value": "Romania - Europe/Bucharest"
            },
            {
                  "key": "RU_UTC+12:00",
                  "value": "Russia - Asia/Anadyr"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Barnaul"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Chita"
            },
            {
                  "key": "RU_UTC+08:00",
                  "value": "Russia - Asia/Irkutsk"
            },
            {
                  "key": "RU_UTC+12:00",
                  "value": "Russia - Asia/Kamchatka"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Khandyga"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Krasnoyarsk"
            },
            {
                  "key": "RU_UTC+11:00",
                  "value": "Russia - Asia/Magadan"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Novokuznetsk"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Novosibirsk"
            },
            {
                  "key": "RU_UTC+06:00",
                  "value": "Russia - Asia/Omsk</option>"
            },
            {
                  "key": "RU_UTC+11:00",
                  "value": "Russia - Asia/Srednekolymsk"
            },
            {
                  "key": "RU_UTC+07:00",
                  "value": "Russia - Asia/Tomsk"
            },
            {
                  "key": "RU_UTC+10:00",
                  "value": "Russia - Asia/Ust-Nera"
            },
            {
                  "key": "RU_UTC+10:00",
                  "value": "Russia - Asia/Vladivostok"
            },
            {
                  "key": "RU_UTC+09:00",
                  "value": "Russia - Asia/Yakutsk"
            },
            {
                  "key": "RU_UTC+05:00",
                  "value": "Russia - Asia/Yekaterinburg"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Astrakhan"
            },
            {
                  "key": "RU_UTC+02:00",
                  "value": "Russia - Europe/Kaliningrad"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Kirov"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Moscow"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Samara"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Saratov"
            },
            {
                  "key": "RU_UTC+03:00",
                  "value": "Russia - Europe/Simferopol"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Ulyanovsk"
            },
            {
                  "key": "RU_UTC+04:00",
                  "value": "Russia - Europe/Volgograd"
            },
            {
                  "key": "RW_UTC+02:00",
                  "value": "Rwanda - Africa/Kigali"
            },
            {
                  "key": "BL_UTC-04:00",
                  "value": "Saint Barthélemy - America/St_Barthelemy"
            },
            {
                  "key": "SH_UTC+00:00",
                  "value": "Saint Helena - Atlantic/St_Helena"
            },
            {
                  "key": "KN_UTC-04:00",
                  "value": "Saint Kitts and Nevis - America/St_Kitts"
            },
            {
                  "key": "LC_UTC-04:00",
                  "value": "Saint Lucia - America/St_Lucia"
            },
            {
                  "key": "MF_UTC-04:00",
                  "value": "Saint Martin - America/Marigot"
            },
            {
                  "key": "PM_UTC-02:00",
                  "value": "Saint Pierre and Miquelon - America/Miquelon"
            },
            {
                  "key": "VC_UTC-04:00",
                  "value": "Saint Vincent and the Grenadines - America/St_Vincent"
            },
            {
                  "key": "WS_UTC+14:00",
                  "value": "Samoa - Pacific/Apia"
            },
            {
                  "key": "SM_UTC+01:00",
                  "value": "San Marino - Europe/San_Marino"
            },
            {
                  "key": "ST_UTC+00:00",
                  "value": "Sao Tome and Principe - Africa/Sao_Tome"
            },
            {
                  "key": "SA_UTC+03:00",
                  "value": "Saudi Arabia - Asia/Riyadh"
            },
            {
                  "key": "SN_UTC+00:00",
                  "value": "Senegal - Africa/Dakar"
            },
            {
                  "key": "RS_UTC+01:00",
                  "value": "Serbia - Europe/Belgrade"
            },
            {
                  "key": "SC_UTC+04:00",
                  "value": "Seychelles - Indian/Mahe"
            },
            {
                  "key": "SL_UTC+00:00",
                  "value": "Sierra Leone - Africa/Freetown"
            },
            {
                  "key": "SG_UTC+08:00",
                  "value": "Singapore - Asia/Singapore"
            },
            {
                  "key": "SX_UTC-04:00",
                  "value": "Sint Maarten - America/Lower_Princes"
            },
            {
                  "key": "SK_UTC+01:00",
                  "value": "Slovakia - Europe/Bratislava"
            },
            {
                  "key": "SI_UTC+01:00",
                  "value": "Slovenia - Europe/Ljubljana"
            },
            {
                  "key": "SB_UTC+11:00",
                  "value": "Solomon Islands - Pacific/Guadalcanal"
            },
            {
                  "key": "SO_UTC+03:00",
                  "value": "Somalia - Africa/Mogadishu"
            },
            {
                  "key": "ZA_UTC+02:00",
                  "value": "South Africa - Africa/Johannesburg"
            },
            {
                  "key": "GS_UTC-02:00",
                  "value": "South Georgia and the South Sandwich Islands - Atlantic/South_Georgia"
            },
            {
                  "key": "KR_UTC+09:00",
                  "value": "South Korea - Asia/Seoul"
            },
            {
                  "key": "SS_UTC+03:00",
                  "value": "South Sudan - Africa/Juba"
            },
            {
                  "key": "ES_UTC+01:00",
                  "value": "Spain - Africa/Ceuta"
            },
            {
                  "key": "ES_UTC+00:00",
                  "value": "Spain - Atlantic/Canary"
            },
            {
                  "key": "ES_UTC+01:00",
                  "value": "Spain - Europe/Madrid"
            },
            {
                  "key": "LK_UTC+05:30",
                  "value": "Sri Lanka - Asia/Colombo"
            },
            {
                  "key": "SD_UTC+02:00",
                  "value": "Sudan - Africa/Khartoum"
            },
            {
                  "key": "SR_UTC-03:00",
                  "value": "Suriname - America/Paramaribo"
            },
            {
                  "key": "SJ_UTC+01:00",
                  "value": "Svalbard and Jan Mayen - Arctic/Longyearbyen"
            },
            {
                  "key": "SZ_UTC+02:00",
                  "value": "Swaziland - Africa/Mbabane"
            },
            {
                  "key": "SE_UTC+01:00",
                  "value": "Sweden - Europe/Stockholm"
            },
            {
                  "key": "CH_UTC+01:00",
                  "value": "Switzerland - Europe/Zurich"
            },
            {
                  "key": "SY_UTC+02:00",
                  "value": "Syria - Asia/Damascus"
            },
            {
                  "key": "TW_UTC+08:00",
                  "value": "Taiwan - Asia/Taipei"
            },
            {
                  "key": "TJ_UTC+05:00",
                  "value": "Tajikistan - Asia/Dushanbe"
            },
            {
                  "key": "TZ_UTC+03:00",
                  "value": "Tanzania - Africa/Dar_es_Salaam"
            },
            {
                  "key": "TH_UTC+07:00",
                  "value": "Thailand - Asia/Bangkok"
            },
            {
                  "key": "TG_UTC+00:00",
                  "value": "Togo - Africa/Lome"
            },
            {
                  "key": "TK_UTC+13:00",
                  "value": "Tokelau - Pacific/Fakaofo"
            },
            {
                  "key": "TO_UTC+13:00",
                  "value": "Tonga - Pacific/Tongatapu"
            },
            {
                  "key": "TT_UTC-04:00",
                  "value": "Trinidad and Tobago - America/Port_of_Spain"
            },
            {
                  "key": "TN_UTC+01:00",
                  "value": "Tunisia - Africa/Tunis"
            },
            {
                  "key": "TR_UTC+03:00",
                  "value": "Turkey - Europe/Istanbul"
            },
            {
                  "key": "TM_UTC+05:00",
                  "value": "Turkmenistan - Asia/Ashgabat"
            },
            {
                  "key": "TC_UTC-05:00",
                  "value": "Turks and Caicos Islands - America/Grand_Turk"
            },
            {
                  "key": "TV_UTC+12:00",
                  "value": "Tuvalu - Pacific/Funafuti"
            },
            {
                  "key": "VI_UTC-04:00",
                  "value": "U.S. Virgin Islands - America/St_Thomas"
            },
            {
                  "key": "UG_UTC+03:00",
                  "value": "Uganda - Africa/Kampala"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Kiev"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Uzhgorod"
            },
            {
                  "key": "UA_UTC+02:00",
                  "value": "Ukraine - Europe/Zaporozhye"
            },
            {
                  "key": "AE_UTC+04:00",
                  "value": "United Arab Emirates - Asia/Dubai"
            },
            {
                  "key": "GB_UTC+00:00",
                  "value": "United Kingdom - Europe/London"
            },
            {
                  "key": "US_UTC-09:00",
                  "value": "United States - America/Adak"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Anchorage"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Boise"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Chicago"
            },
            {
                  "key": "US_UTC-06:00",
                  "value": "United States - America/Denver"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Detroit"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Indianapolis"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Knox"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Marengo"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Petersburg"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Indiana/Tell_City"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Vevay"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Vincennes"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Indiana/Winamac"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Juneau"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Kentucky/Louisville"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/Kentucky/Monticello"
            },
            {
                  "key": "US_UTC-07:00",
                  "value": "United States - America/Los_Angeles"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/Menominee"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Metlakatla"
            },
            {
                  "key": "US_UTC-04:00",
                  "value": "United States - America/New_York"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Nome"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/North_Dakota/Beulah"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/North_Dakota/Center"
            },
            {
                  "key": "US_UTC-05:00",
                  "value": "United States - America/North_Dakota/New_Salem"
            },
            {
                  "key": "US_UTC-07:00",
                  "value": "United States - America/Phoenix"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Sitka"
            },
            {
                  "key": "US_UTC-08:00",
                  "value": "United States - America/Yakutat"
            },
            {
                  "key": "US_UTC-10:00",
                  "value": "United States - Pacific/Honolulu"
            },
            {
                  "key": "UM_UTC-11:00",
                  "value": "United States Minor Outlying Islands - Pacific/Midway"
            },
            {
                  "key": "UM_UTC+12:00",
                  "value": "United States Minor Outlying Islands - Pacific/Wake"
            },
            {
                  "key": "UY_UTC-03:00",
                  "value": "Uruguay - America/Montevideo"
            },
            {
                  "key": "UZ_UTC+05:00",
                  "value": "Uzbekistan - Asia/Samarkand"
            },
            {
                  "key": "UZ_UTC+05:00",
                  "value": "Uzbekistan - Asia/Tashkent"
            },
            {
                  "key": "VU_UTC+11:00",
                  "value": "Vanuatu - Pacific/Efate"
            },
            {
                  "key": "VA_UTC+01:00",
                  "value": "Vatican - Europe/Vatican"
            },
            {
                  "key": "VE_UTC-04:00",
                  "value": "Venezuela - America/Caracas"
            },
            {
                  "key": "VN_UTC+07:00",
                  "value": "Vietnam - Asia/Ho_Chi_Minh"
            },
            {
                  "key": "WF_UTC+12:00",
                  "value": "Wallis and Futuna - Pacific/Wallis"
            },
            {
                  "key": "EH_UTC+01:00",
                  "value": "Western Sahara - Africa/El_Aaiun"
            },
            {
                  "key": "YE_UTC+03:00",
                  "value": "Yemen - Asia/Aden"
            },
            {
                  "key": "ZM_UTC+02:00",
                  "value": "Zambia - Africa/Lusaka"
            },
            {
                  "key": "ZW_UTC+02:00",
                  "value": "Zimbabwe - Africa/Harare"
            },
      ]
};