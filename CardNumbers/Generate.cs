using System;
using System.Collections.Generic;
using System.Threading;

namespace CardNumbers
{
    public static class Generate
    {
        //code for generate new number 

        public static string[] AmericanEx_Prefix = new[] { "34", "37" };

        public static string[] Maestro_Prefix = new[] { "50", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69" };

        public static string[] MasterCard_Prefix = new[] { "51", "52", "53", "54", "55" };

        public static string[] Visa_Prefix = new[] { "4" };

        public static string[] JCB_Prefix = new[] { "3528", "3535", "3546", "3542", "3555", "3557", "3562", "3573" };


        private static string Strrev(string str)
        {
            if (str == null)
                return "";

            string revstr = "";

            for (int i = str.Length - 1; i >= 0; i--)
            {
                revstr += str[i];
            }

            return revstr;
        }

        public static string completed_number(string prefix, int length)
        {
            string ccnumber = prefix;
            // generate digits
            while (ccnumber.Length < (length - 1))
            {
                double rnd = (new Random().NextDouble() * 1.0f - 0f);
                ccnumber += Math.Floor(rnd * 10);
                Thread.Sleep(20);
            }
            // reverse number and convert to int
            string reversedCCnumberstring = Strrev(ccnumber);
            var reversedCCnumberList = new List<int>();
            for (int i = 0; i < reversedCCnumberstring.Length; i++)
            {
                reversedCCnumberList.Add(Convert.ToInt32(reversedCCnumberstring[i].ToString()));
            }
            // calculate sum
            int sum = 0;
            int pos = 0;
            int[] reversedCCnumber = reversedCCnumberList
               .ToArray();

            while (pos < length - 1)
            {
                int odd = reversedCCnumber[pos] * 2;
                if (odd > 9)
                {
                    odd -= 9;
                }
                sum += odd;
                if (pos != (length - 2))
                {
                    sum += reversedCCnumber[pos + 1];
                }
                pos += 2;
            }

            // calculate check digit
            int checkdigit =
               Convert.ToInt32((Math.Floor((decimal)sum / 10) + 1) * 10 - sum) % 10;
            ccnumber += checkdigit;
            return ccnumber;
        }

        public static string[] credit_card_number(string[] prefixList, int length,
                                                  int howMany)
        {
            var result = new Stack<string>();
            for (int i = 0; i < howMany; i++)
            {
                int next = new Random().Next(0, prefixList.Length - 1);
                string ccnumber = prefixList[next];
                result.Push(completed_number(ccnumber, length));
            }
            return result.ToArray();
        }


        public static string generateAmexicanExpressNumber()
        {
            return credit_card_number(AmericanEx_Prefix, 15, 1)[0];
        }

        public static string generateMaestroNumber()
        {
            return credit_card_number(Maestro_Prefix, 16, 1)[0];
        }

        public static string generateMasterCardNumber()
        {
            return credit_card_number(MasterCard_Prefix, 16, 1)[0];
        }

        public static string generateVisaNumber()
        {
            return credit_card_number(Visa_Prefix, 16, 1)[0];
        }

        public static string generateJCBNumber()
        {
            return credit_card_number(JCB_Prefix, 16, 1)[0];
        }
    }
}