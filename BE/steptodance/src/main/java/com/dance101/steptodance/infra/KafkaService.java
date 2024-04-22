package com.dance101.steptodance.infra;

import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.service.AIServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class KafkaService implements AIServerService {
    private final KafkaTemplate<String, String> kafkaTemplate;
    @Value("${topic.name}")
    private String topicName;

    @Override
    public void send(GuideFeedbackCreateRequest feedbackCreateRequest) {
        this.kafkaTemplate.send(topicName, feedbackCreateRequest.videoUrl());
    }
}
