using System.Web.Mvc;

namespace CardNumbers.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            string s = this.Request.QueryString["vendor"];

            switch (s)
            {
                case "AMEX":
                    ViewBag.Number = Generate.generateAmexicanExpressNumber();
                    break;
                case "Maestro":
                    ViewBag.Number = Generate.generateMaestroNumber();
                    break;
                case "Master":
                    ViewBag.Number = Generate.generateMasterCardNumber();
                    break;
                case "VISA":
                    ViewBag.Number = Generate.generateVisaNumber();
                    break;
                case "JCB":
                    ViewBag.Number = Generate.generateJCBNumber();
                    break;
                default:
                    break;
            }

            return View();
            
            
        }

        
    }
}