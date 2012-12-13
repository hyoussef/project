package com.hn.authenticationHandler;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@Component
public class AjaxAuthenticationSuccessHandler implements
        AuthenticationSuccessHandler  {

	
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
    	 Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
    	 if(roles.contains("ROLE_USER")){
    		 response.sendError(HttpServletResponse.SC_OK, "User Authenticated");	 
    	 }else{
    		 response.sendError(HttpServletResponse.SC_FORBIDDEN, "User Authenticated but access denied");	 
    	 }
    }
}
