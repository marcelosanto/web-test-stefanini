package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
    @FindBy(linkText = "Sign in")
    public WebElement botaoSignin;
}
