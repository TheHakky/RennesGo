import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;
import rennesgo.data.ProfileComponent;


import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestProfileComponent {
    private ProfileComponent profileComponent;

    @BeforeEach
    void setUp() {
        profileComponent = new ProfileComponent();
        profileComponent.addProfile("user1");
    }

    @Test
    void getProfilesTest() {
        assertEquals(1, profileComponent.getProfiles().size());
    }

    @ParameterizedTest
    @ValueSource(strings = {"user3, user2"})
    void addProfileTest(final String candidate) {
        assertEquals(candidate, profileComponent.addProfile(candidate).getUsername());
        assertTrue(!profileComponent.getProfiles().isEmpty());
    }

    @ParameterizedTest
    @MethodSource("provideForFindProfileTest")
    void findProfileTest(String user, int count) {
        assertEquals(count, profileComponent.findProfileOf(user).count());
    }

    @Test
    void deleteProfileTest() {
        profileComponent.delProfile("user2");
        assertTrue(!profileComponent.getProfiles().isEmpty());
        profileComponent.delProfile("user1");
        assertTrue(profileComponent.getProfiles().isEmpty());
    }

    private static Stream<Arguments> provideForFindProfileTest() {
        return Stream.of(
                Arguments.of("user1", 1),
                Arguments.of("user3", 0)
        );
    }
}

