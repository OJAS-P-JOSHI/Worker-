package learningapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OtpService {

    @Autowired
    private JavaMailSender mailSender;

    private final Random random = new Random();

    public int generateOtp() {
        return 1000000 + random.nextInt(9000000);
    }

    public void sendOtp(String email, int otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP code is " + otp);
        mailSender.send(message);
    }
}

