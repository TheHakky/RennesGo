import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import rennesgo.data.Profile;


import static org.junit.jupiter.api.Assertions.*;

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
