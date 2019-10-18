import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import rennesgo.data.Profile;
import rennesgo.data.ProfileComponent;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestProfileComponent {
    ProfileComponent pc;

    @BeforeEach
    void setUp() {
        pc = new ProfileComponent();
        pc.addProfile("user1");

    }

    @Test
    void constructorTest() {
        assertEquals(1, pc.getProfiles().size());
    }

    @ParameterizedTest
    @ValueSource(strings = {"user1, user2"})
    void addProfileTest(final String candidate) {
        assertEquals(candidate, pc.addProfile(candidate).getUsername());
        assertTrue(!pc.getProfiles().isEmpty());
    }

    @Test
    void findProfileTest() {
        assertTrue(pc.findProfileOf("user1").count() != 0);
        assertTrue(pc.findProfileOf("user3").count() == 0);
    }

    @Test
    void deleteProfileTest() {
        pc.delProfile("user2");
        assertTrue(!pc.getProfiles().isEmpty());
        pc.delProfile("user1");
        assertTrue(pc.getProfiles().isEmpty());
    }
}

