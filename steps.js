import { Alert, modal, StyleSheet } from 'react-native';
import { useState } from 'react';

const [modalVisible, setModalVisible] = useState(false);

<Button title='Share profile' onPress={() => setModalVisible(true)}></Button>;

<Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={closeModal}>
    <View style={styles.overlay}>
        <View style={style.sheet}>
            <Text style={style.sheetTitle}>Share profile</Text>
            <Text style={style.sheetText}>Share Alex's profile with your team.</Text>
            <Pressable
                onPress={closeModal}
                style={({ pressed }) => [styles.sheetClose, pressed && styles.pressed]}
            >
                <Text style={styles.sheetCloseText}>Close</Text>
            </Pressable>
        </View>
    </View>
</Modal>

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    screenContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 20,
        ...cardShadow,
    },
    banner: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    body: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: -44,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: COLORS.card,
    },
    onlineBadge: {
        position: 'absolute',
        right: 4,
        bottom: 4,
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: COLORS.online,
        borderWidth: 3,
        borderColor: COLORS.card,
    },
    offlineBadge: {
        backgroundColor: COLORS.offline,
    },
    headerText: {
        flex: 1,
        marginLeft: 14,
        marginTop: 52,
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.text,
    },
    role: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.primary,
        marginTop: 2,
    },
    location: {
        fontSize: 13,
        color: COLORS.muted,
        marginTop: 2,
    },
    bio: {
        marginTop: 16,
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.text,
    },
    link: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.primary,
    },
    statsRow: {
        flexDirection: 'row',
        marginTop: 18,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border,
    },
    stat: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
    },
    statDivider: {
        borderRightWidth: 1,
        borderRightColor: COLORS.border,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    statLabel: {
        fontSize: 12,
        color: COLORS.muted,
        marginTop: 2,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 16,
    },
    tag: {
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
    },
    tagText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.primary,
    },
    tagSelected: {
        backgroundColor: COLORS.primary,
    },
    tagTextSelected: {
        color: '#FFFFFF',
    },
    hint: {
        marginTop: 8,
        fontSize: 12,
        color: COLORS.muted,
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
    },
    buttonPrimary: {
        backgroundColor: COLORS.primary,
    },
    buttonFollowing: {
        backgroundColor: COLORS.primaryLight,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.primary,
    },
    buttonTextPrimary: {
        color: '#FFFFFF',
    },
    pressed: {
        opacity: 0.6,
    },
    composer: {
        marginTop: 16,
    },
    input: {
        height: 44,
        paddingHorizontal: 12,
        fontSize: 15,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 12,
    },
    composerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    counter: {
        fontSize: 12,
        color: COLORS.muted,
    },
    sendButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    sendButtonDisabled: {
        backgroundColor: COLORS.offline,
    },
    sendText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    shareWrapper: {
        marginTop: 12,
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    sheet: {
        width: '100%',
        maxWidth: 420,
        padding: 20,
        borderRadius: 20,
        backgroundColor: COLORS.card,
    },
    sheetTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text,
    },
    sheetText: {
        marginTop: 4,
        marginBottom: 12,
        fontSize: 14,
        color: COLORS.muted,
    },
    sheetClose: {
        marginTop: 8,
        paddingVertical: 10,
        alignItems: 'center',
    },
    sheetCloseText: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.primary,
    },
    sectionTitle: {
        marginTop: 18,
        marginBottom: 10,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: COLORS.muted,
    },
    projectsRow: {
        gap: 12,
        paddingRight: 4,
    },
    projectCard: {
        width: 140,
        padding: 14,
        borderRadius: 14,
        backgroundColor: COLORS.primaryLight,
    },
    projectName: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.text,
    },
    projectTech: {
        marginTop: 4,
        fontSize: 12,
        color: COLORS.muted,
    },
    projectStars: {
        marginTop: 12,
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.primary,
    },
    contactList: {
        maxHeight: 240,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border,
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    contactName: {
        fontSize: 15,
        color: COLORS.text,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 1.5,
        borderColor: COLORS.offline,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxSelected: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
    },
    checkMark: {
        fontSize: 13,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    shareButton: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    shareButtonDisabled: {
        backgroundColor: COLORS.offline,
    },
    shareButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    safe: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

