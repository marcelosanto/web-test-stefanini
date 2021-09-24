package utils;

import io.cucumber.core.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class Utils {

    public static WebDriver driver;

    private static final String url = "http://automationpractice.com/";

    public static void acessarSistema() {

        System.setProperty("webdriver.chrome.driver", "C:\\driver\\chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        driver.get(url);
    }

    public static <T> T Na(Class<T> classe) {
        return PageFactory.initElements(driver, classe);
    }

    public static void capturarTela(Scenario scenario) {
        final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot, "image/png");
    }
}
