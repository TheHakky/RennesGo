import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.Mockito;
import rennesgo.data.Profile;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class TestProfile {
    private Profile profile;

    @BeforeEach
    void setUp() {
        String usernameTest = "Testus Maximum";
        profile = new Profile(usernameTest);
    }

    @ParameterizedTest
    @ValueSource(strings = {"test"})
    void addPrefLineTest(String candidate) {
        profile.addPrefLine(candidate);
        assertTrue(profile.getPrefLines().contains("test"));
    }

    @Test
    void getUsernameTest() {
        assertEquals("Testus Maximum", profile.getUsername());
    }

    @Test
    void getPrefLinesTest() {
        profile.addPrefLine("test");
        assertTrue(!profile.getPrefLines().isEmpty());
    }

    @ParameterizedTest
    @ValueSource(strings = {"test"})
    void removePrefLineTest(String candidate) {
        profile.addPrefLine(candidate);
        assertTrue(profile.getPrefLines().contains(candidate));
        profile.removePrefLine(candidate);
        assertFalse(profile.getPrefLines().contains(candidate));
    }
}
