import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.internal.configuration.injection.MockInjection;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.web.server.ResponseStatusException;
import rennesgo.controller.ProfileController;
import rennesgo.controller.UserController;
import rennesgo.data.ProfileComponent;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.*;
import java.util.stream.Stream;

import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.mockitoSession;

public class TestUserController {

    UserController userController;
    PasswordEncoder passwordEncoderMock;
    UserDetailsManager userDetailsManagerMock;
    ProfileComponent profilesMock;
    UserDetails userDetailsMock;
    Principal principalMock;
    HttpServletRequest requestMock;
    HttpSession sessionMock;

    @BeforeEach
    void setUp() {
        passwordEncoderMock = mock(PasswordEncoder.class);
        userDetailsManagerMock = mock(UserDetailsManager.class);
        profilesMock = mock(ProfileComponent.class);
        userDetailsMock = mock(UserDetails.class);
        principalMock = mock(Principal.class);
        requestMock = mock(HttpServletRequest.class);
        sessionMock = mock(HttpSession.class);
        Mockito.when(userDetailsManagerMock.userExists("user1")).thenReturn(true);
        Mockito.when(userDetailsManagerMock.userExists("user2")).thenReturn(false);
        Mockito.when(passwordEncoderMock.encode("123")).thenReturn("123");
        Mockito.when(principalMock.getName()).thenReturn("user1");
        Mockito.when(requestMock.getSession(anyBoolean())).thenReturn(sessionMock);
        userController = new UserController(passwordEncoderMock, userDetailsManagerMock, profilesMock);
    }

    @ParameterizedTest
    @MethodSource("provideUserForNewAccountTest")
    void newAccountTest(String user, String pwd, Boolean exception) {
        if(exception) {
            Assertions.assertThrows(ResponseStatusException.class, () -> userController.newAccount(user, pwd));

        }
        else {
            userController.newAccount(user, pwd);
            Mockito.verify(userDetailsManagerMock, Mockito.times(1)).userExists(user);
            //Mockito.verify(userDetailsManagerMock, Mockito.times(1)).createUser(userDetailsMock);
            Mockito.verify(profilesMock, Mockito.times(1)).addProfile(user);
        }
    }

    private static Stream<Arguments> provideUserForNewAccountTest() {
        return Stream.of(
                Arguments.of("user2", "123", false),
                Arguments.of("user1", "123", true)
        );
    }

    @Test
    void delAccountTest() {
        userController.delAccount(principalMock, requestMock);
        Mockito.verify(profilesMock, Mockito.times(1)).delProfile(principalMock.getName());
        Mockito.verify(userDetailsManagerMock, Mockito.times(1)).deleteUser(principalMock.getName());
        Mockito.verify(requestMock, Mockito.times(1)).getSession(false);
        Mockito.verify(sessionMock, Mockito.times(1)).invalidate();
    }
}
