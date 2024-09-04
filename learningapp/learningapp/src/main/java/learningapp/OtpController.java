package learningapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
public class OtpController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send")
    public String sendOtp(@RequestParam String email) {
        int otp = otpService.generateOtp();
        otpService.sendOtp(email, otp);

        // Save OTP to the database
        User user = new User();
        user.setEmail(email);
        user.setOtp(otp);
        userRepository.save(user);

        return "OTP sent";
    }

    @PostMapping("/validate")
    public boolean validateOtp(@RequestParam String email, @RequestParam int otp) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getOtp() == otp;
    }
}
