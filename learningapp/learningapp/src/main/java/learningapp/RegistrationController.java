package learningapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public String registerUser(@RequestParam String fullName,
                               @RequestParam String education,
                               @RequestParam String email,
                               @RequestParam String mobileNumber) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            user.setFullName(fullName);
            user.setEducation(education);
            user.setMobileNumber(mobileNumber);
            userRepository.save(user);
            return "User registered successfully";
        }
        return "User not found";
    }
}
