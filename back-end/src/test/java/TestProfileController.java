import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import rennesgo.controller.ProfileController;
import rennesgo.data.Profile;
import rennesgo.data.ProfileComponent;
import org.mockito.Mockito;

import java.security.Principal;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

public class TestProfileController {
    private ProfileController profileController;
    private Principal principalMock;
    private Profile profileMock;

    @BeforeEach
    void setUp() {
        ProfileComponent profilesMock = mock(ProfileComponent.class);
        principalMock = mock(Principal.class);
        profileMock = mock(Profile.class);
        Mockito.when(principalMock.getName()).thenReturn("lel");
        Mockito.when(profileMock.getUsername()).thenReturn("lel");
        Stream stream = Stream.of(profileMock);
        Mockito.when(profilesMock.findProfileOf(profileMock.getUsername())).thenReturn(stream);
        profileController = new ProfileController(profilesMock);
    }

    @Test
    void getProfileTest() {
        assertEquals(profileMock, profileController.getProfile(principalMock));
    }

    @ParameterizedTest
    @ValueSource(strings = {"id3, id3"})
    void newPreferredLineTest(String candidate) {
        profileController.newPreferredLine(candidate, principalMock);
        Mockito.verify(profileMock, Mockito.times(1)).addPrefLine(candidate);
    }

    @ParameterizedTest
    @ValueSource(strings = {"id1, id2"})
    void delPreferredLineTest(String candidate) {
        profileController.delPreferredLine(candidate, principalMock);
        Mockito.verify(profileMock, Mockito.times(1)).removePrefLine(candidate);
    }

    @Test
    void whoiamTest() {
        assertEquals("lel" , profileController.whoiam(principalMock));
    }
}
